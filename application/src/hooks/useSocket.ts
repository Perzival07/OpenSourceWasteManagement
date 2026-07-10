import { useEffect, useRef } from "react";

// Get raw URL from environment config
const RAW_URL = (import.meta as any).env?.VITE_REALTIME_URL || "http://localhost:8000";

// Normalise HTTP/HTTPS URLs to WS/WSS
const getWebSocketUrl = (url: string): string => {
  if (url.startsWith("ws://") || url.startsWith("wss://")) {
    return url;
  }
  const cleanUrl = url.replace(/^http/, "ws");
  return cleanUrl.endsWith("/ws") ? cleanUrl : `${cleanUrl}/ws`;
};

const WS_URL = getWebSocketUrl(RAW_URL);

export function useSocket(
  events: Record<string, (payload: any) => void> = {},
  enabled: boolean = true
) {
  const wsRef = useRef<WebSocket | null>(null);
  const eventsRef = useRef(events);
  eventsRef.current = events;

  useEffect(() => {
    if (!enabled) return;

    let socket: WebSocket | null = null;
    let reconnectTimeoutId: any = null;

    function connect() {
      console.log("[WebSocket] Connecting to:", WS_URL);
      try {
        socket = new WebSocket(WS_URL);
        wsRef.current = socket;

        socket.onopen = () => {
          console.log("[WebSocket] Connected successfully");
        };

        socket.onmessage = (event) => {
          try {
            const parsed = JSON.parse(event.data);
            const eventName = parsed.event;
            if (eventName && eventsRef.current[eventName]) {
              eventsRef.current[eventName](parsed);
            }
          } catch (err) {
            console.error("[WebSocket] Error parsing message:", err);
          }
        };

        socket.onclose = (event) => {
          console.log(`[WebSocket] Connection closed: ${event.reason}. Reconnecting in 3s...`);
          reconnectTimeoutId = setTimeout(() => {
            connect();
          }, 3000);
        };

        socket.onerror = (err) => {
          console.error("[WebSocket] Connection error:", err);
          // Let onclose handle reconnect
          socket?.close();
        };
      } catch (err) {
        console.error("[WebSocket] Exception during connection setup:", err);
        reconnectTimeoutId = setTimeout(() => {
          connect();
        }, 3000);
      }
    }

    connect();

    return () => {
      if (reconnectTimeoutId) {
        clearTimeout(reconnectTimeoutId);
      }
      if (socket) {
        // Prevent reconnect loop upon clean unmount
        socket.onclose = null;
        socket.close();
      }
      wsRef.current = null;
    };
  }, [enabled]);

  return wsRef;
}
