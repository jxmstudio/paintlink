"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const MeshGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.MeshGradient),
  { ssr: false }
);

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

// On the server (and first client paint) treat motion as reduced, so the
// static CSS gradient renders until the client confirms preferences.
function getServerSnapshot() {
  return true;
}

/**
 * Animated brand-colour mesh gradient used behind the home hero.
 * Client-only, and skipped entirely for users with reduced-motion enabled —
 * the parent's static CSS gradient remains underneath.
 */
export function ShaderBackdrop() {
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (reducedMotion) return null;

  return (
    <div className="absolute inset-0 opacity-90" aria-hidden="true">
      <MeshGradient
        colors={["#0e1d3b", "#162b54", "#0f79be", "#22407c", "#0c629a"]}
        distortion={0.9}
        swirl={0.35}
        speed={0.35}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
