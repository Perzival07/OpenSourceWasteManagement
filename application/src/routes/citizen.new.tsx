import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { MapPin, Image as ImageIcon, X, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/portal/PageHeader";
import { FormField } from "@/components/portal/FormField";
import { SelectField } from "@/components/portal/SelectField";
import { TextareaField } from "@/components/portal/TextareaField";
import { Button } from "@/components/portal/Button";
import { Card } from "@/components/portal/Card";
import { apiFetch } from "@/lib/api";
import { hasErrors, validateFields, validators } from "@/utils/helpers";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const Route = createFileRoute("/citizen/new")({
  component: NewReport,
});

const categories = ["overflow", "litter", "illegal_dump", "missed_pickup", "hazard", "other"];
const priorities = ["low", "medium", "high", "urgent"];

function NewReport() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    category: "overflow",
    priority: "medium",
    description: "",
    address: "",
    latitude: "",
    longitude: "",
    block: "",
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [geocoding, setGeocoding] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  const set = (k: string) => (e: any) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapRef.current) return;

    const initialLat = values.latitude ? Number(values.latitude) : 12.9716;
    const initialLng = values.longitude ? Number(values.longitude) : 77.5946;

    // Fix default Leaflet icon paths in Vite/React
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });

    const map = L.map(mapRef.current).setView([initialLat, initialLng], 13);
    leafletMap.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([initialLat, initialLng], { draggable: true }).addTo(map);
    markerRef.current = marker;

    // Update coordinates on drag end
    marker.on("dragend", () => {
      const pos = marker.getLatLng();
      setValues((v) => ({
        ...v,
        latitude: String(pos.lat.toFixed(6)),
        longitude: String(pos.lng.toFixed(6)),
      }));
      setErrors((er) => ({ ...er, latitude: "", longitude: "" }));
    });

    // Update marker on map click
    map.on("click", (e) => {
      const pos = e.latlng;
      marker.setLatLng(pos);
      setValues((v) => ({
        ...v,
        latitude: String(pos.lat.toFixed(6)),
        longitude: String(pos.lng.toFixed(6)),
      }));
      setErrors((er) => ({ ...er, latitude: "", longitude: "" }));
    });

    return () => {
      map.remove();
    };
  }, []);

  // Sync map center if coordinates change externally
  useEffect(() => {
    if (!leafletMap.current || !markerRef.current) return;
    const lat = Number(values.latitude);
    const lng = Number(values.longitude);
    if (!isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
      const currentPos = markerRef.current.getLatLng();
      if (Math.abs(currentPos.lat - lat) > 0.0001 || Math.abs(currentPos.lng - lng) > 0.0001) {
        markerRef.current.setLatLng([lat, lng]);
        leafletMap.current.setView([lat, lng], 13);
      }
    }
  }, [values.latitude, values.longitude]);

  // Geocode address using Nominatim (OpenStreetMap)
  const geocodeAddress = async () => {
    if (!values.address.trim()) {
      setGeoError("Please enter an address first.");
      return;
    }
    setGeocoding(true);
    setGeoError(null);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(values.address)}`
      );
      const data = await res.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setValues((v) => ({
          ...v,
          latitude: String(Number(lat).toFixed(6)),
          longitude: String(Number(lon).toFixed(6)),
        }));
        setErrors((er) => ({ ...er, latitude: "", longitude: "" }));
      } else {
        setGeoError("Could not find coordinates for this address. Try placing a pin manually on the map.");
      }
    } catch (err) {
      setGeoError("Geocoding failed. Please check your internet connection.");
    } finally {
      setGeocoding(false);
    }
  };

  const detect = () => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation not supported by this browser");
      return;
    }
    setGeoLoading(true);
    setGeoError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setValues((v) => ({
          ...v,
          latitude: String(pos.coords.latitude.toFixed(6)),
          longitude: String(pos.coords.longitude.toFixed(6)),
        }));
        setErrors((er) => ({ ...er, latitude: "", longitude: "" }));
        setGeoLoading(false);
      },
      (err) => {
        setGeoError(err.message || "Couldn't fetch your location");
        setGeoLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const useFallbackCoordinates = () => {
    setValues((v) => ({
      ...v,
      latitude: "12.9716",
      longitude: "77.5946",
    }));
    setErrors((er) => ({ ...er, latitude: "", longitude: "" }));
    setGeoError(null);
  };

  const onFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setPhotos((cur) => [...cur, ...files].slice(0, 4));
    e.target.value = "";
  };
  const removePhoto = (i: number) => setPhotos((cur) => cur.filter((_, j) => j !== i));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateFields(
      {
        description: [validators.required, validators.minLength(10)],
        address: validators.required,
        latitude: validators.required,
        longitude: validators.required,
      },
      values
    );
    setErrors(errs);
    if (hasErrors(errs)) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const fd = new FormData();
      fd.append("message_text", values.description);
      fd.append("latitude", values.latitude);
      fd.append("longitude", values.longitude);
      fd.append("tags", [values.category, values.priority].join(","));
      if (values.block) fd.append("block", values.block);
      if (values.address) fd.append("address", values.address);
      photos.forEach((p) => fd.append("photo", p));
      await apiFetch("/reports/", { method: "POST", body: fd });
      setSuccess(true);
    } catch (err: any) {
      setSubmitError(err?.message || "Failed to submit report");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-lg mx-auto py-12">
        <Card className="p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-forest-100 text-forest-700 grid place-items-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="mt-4 font-display font-bold text-2xl">Report submitted</h2>
          <p className="mt-2 text-muted-foreground">
            Your report is in the queue. You'll be notified as it's assigned and
            resolved.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="secondary" onClick={() => { setSuccess(false); setValues((v) => ({ ...v, description: "", address: "" })); setPhotos([]); }}>
              File another
            </Button>
            <Button onClick={() => navigate({ to: "/citizen/reports" })}>
              View my reports
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <>
      <PageHeader title="New report" subtitle="Tell us what's happening — be as specific as possible." />

      {submitError ? (
        <div className="mb-4 border border-red-200 bg-red-50 p-3 text-sm text-red-700 rounded-lg">
          {submitError}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <SelectField label="Category" value={values.category} onChange={set("category")}>
              {categories.map((c) => (
                <option key={c} value={c}>{c.replace(/_/g, " ")}</option>
              ))}
            </SelectField>
            <SelectField label="Priority" value={values.priority} onChange={set("priority")}>
              {priorities.map((p) => <option key={p} value={p}>{p}</option>)}
            </SelectField>
          </div>
          <TextareaField
            label="Description"
            value={values.description}
            onChange={set("description")}
            error={errors.description}
            placeholder="What did you see? When?"
          />
          <div className="grid sm:grid-cols-4 gap-4 items-end">
            <div className="sm:col-span-3">
              <FormField
                label="Address"
                value={values.address}
                onChange={set("address")}
                error={errors.address}
                placeholder="123 Maple St"
              />
            </div>
            <Button type="button" variant="secondary" onClick={geocodeAddress} loading={geocoding} className="w-full">
              Locate Address
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 items-end">
            <FormField label="Latitude" value={values.latitude} onChange={set("latitude")} error={errors.latitude} />
            <FormField label="Longitude" value={values.longitude} onChange={set("longitude")} error={errors.longitude} />
            <Button type="button" variant="secondary" onClick={detect} loading={geoLoading}>
              <MapPin className="w-4 h-4" /> Auto-detect
            </Button>
          </div>
          
          {/* Leaflet Map container */}
          <div>
            <label className="text-xs font-medium text-ink-950 uppercase tracking-wide mb-1.5 block">
              Or drag/click pin on map
            </label>
            <div 
              ref={mapRef} 
              className="h-[250px] w-full rounded-md border-2 border-ink-950 shadow-[2px_2px_0_0_#0a0f0a] z-0 overflow-hidden"
            />
          </div>

          {geoError ? (
            <div className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2">
              <span>⚠️ {geoError}. You can enter them manually, or use fallback coordinates.</span>
              <button
                type="button"
                onClick={useFallbackCoordinates}
                className="text-amber-800 hover:text-amber-950 font-semibold underline text-left shrink-0"
              >
                Use Fallback Coordinates
              </button>
            </div>
          ) : null}
          <FormField label="Block (optional)" value={values.block} onChange={set("block")} placeholder="e.g. B-12" />
        </Card>

        <Card className="p-6 space-y-4">
          <div>
            <div className="text-sm font-medium">Photos</div>
            <div className="text-xs text-muted-foreground">Up to 4 images</div>
          </div>
          <label className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-sand-50">
            <ImageIcon className="w-6 h-6 text-muted-foreground" />
            <div className="mt-2 text-sm font-medium">Click to upload</div>
            <div className="text-xs text-muted-foreground">PNG, JPG up to 10MB</div>
            <input type="file" accept="image/*" multiple className="hidden" onChange={onFiles} />
          </label>
          {photos.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {photos.map((p, i) => {
                const url = URL.createObjectURL(p);
                return (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                    <img src={url} alt={p.name} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      className="absolute top-1 right-1 bg-ink-950/70 text-white rounded-full p-1"
                      aria-label="Remove"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}

          <Button type="submit" loading={submitting} className="w-full" size="lg">
            Submit report
          </Button>
        </Card>
      </form>
    </>
  );
}
