import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CORAL = {
  base: "#f46d76",
  light: "#f88a93",
  deep: "#f05e6a",
};

export type AanState = "idle" | "listening" | "thinking" | "working";

interface AanMascotProps {
  size?: number;
  state?: AanState;
  interactive?: boolean;
  trackCursor?: boolean;
  className?: string;
}

function deriveShape(state: AanState, hover: boolean) {
  if (state === "listening") return { radius: "50%", scaleX: 1, scaleY: 1 };
  if (state === "thinking") return { radius: "14%", scaleX: 1, scaleY: 1 };
  if (state === "working") return { radius: "999px", scaleX: 1.18, scaleY: 0.52 };
  // idle
  if (hover) return { radius: "30%", scaleX: 1.06, scaleY: 0.95 };
  return { radius: "18%", scaleX: 1, scaleY: 1 };
}

/** Aan — coral mascot. Supports static + full interactive (cursor tracking, hover, 4 states). */
export function AanMascot({
  size = 24,
  state = "idle",
  interactive,
  trackCursor,
  className,
}: AanMascotProps) {
  const shouldInteract = interactive ?? size >= 32;
  const shouldTrack = trackCursor ?? shouldInteract;
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hover, setHover] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const big = size > 40;
  const eyeSize = size * 0.16;
  const eyeOffsetX = size * 0.18;
  const eyeY = size * 0.04;

  useEffect(() => {
    if (!shouldTrack) return;
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      // clamp
      setCursor({
        x: Math.max(-0.5, Math.min(0.5, dx)),
        y: Math.max(-0.4, Math.min(0.4, dy)),
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldTrack]);

  const shape = deriveShape(state, hover && shouldInteract);
  const isThinking = state === "thinking";
  const isWorking = state === "working";
  const isListening = state === "listening";

  // eye lean: add small cursor offset
  const eyeTrackX = shouldTrack ? cursor.x * size * 0.08 : 0;
  const eyeTrackY = shouldTrack ? cursor.y * size * 0.06 : 0;
  const bodyLeanX = shouldTrack ? cursor.x * 1.2 : 0;
  const bodyLeanY = shouldTrack ? cursor.y * 0.8 : 0;

  // listening circle: eyes offset slightly wider
  const listeningOffset = isListening ? size * 0.02 : 0;

  return (
    <span
      ref={containerRef}
      aria-hidden
      onMouseEnter={() => shouldInteract && setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn("inline-block shrink-0 select-none", className)}
      style={{
        position: "relative",
        width: size,
        height: isWorking ? size * 0.62 : size,
        display: "inline-block",
        transform: shouldTrack ? `translate(${bodyLeanX}px, ${bodyLeanY}px)` : undefined,
        transition: "transform 120ms ease-out",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          transform: `rotate(45deg) scaleX(${shape.scaleX}) scaleY(${shape.scaleY}) ${isThinking ? "rotate(0deg)" : ""}`,
          borderRadius: shape.radius,
          background: `radial-gradient(circle at 50% 38%, ${CORAL.light} 0%, #f57780 42%, ${CORAL.base} 78%, ${CORAL.deep} 100%)`,
          boxShadow: big
            ? "0 26px 64px -28px rgba(244,109,118,0.5), inset 0 1px 0 rgba(255,255,255,0.2)"
            : "inset 0 1px 0 rgba(255,255,255,0.22)",
          overflow: "hidden",
          transition: "border-radius 180ms ease, transform 180ms ease",
          animation: isThinking ? "aan-spin 2.2s linear infinite" : undefined,
        }}
      >
        {/* Sheen */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 28% 22%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 45%)",
          }}
        />
        {/* Liquid swirl when thinking */}
        {isThinking && (
          <span
            style={{
              position: "absolute",
              inset: "18%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.28), transparent 55%), conic-gradient(from 0deg, transparent, rgba(255,255,255,0.18), transparent)",
              animation: "aan-swirl 1.6s ease-in-out infinite",
            }}
          />
        )}
        {/* Inner periwinkle ring */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: shape.radius,
            boxShadow: "inset 0 0 0 1px rgba(167, 174, 242, 0.18)",
          }}
        />
        {/* Working progress shimmer */}
        {isWorking && (
          <span
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
              animation: "aan-shimmer 1.2s ease-in-out infinite",
            }}
          />
        )}
      </span>

      {/* Eyes — always upright, fixed dots with cursor lean */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: isWorking ? size * 0.62 : size,
        }}
      >
        {[-1, 1].map((dir) => (
          <span
            key={`eye-${dir}`}
            style={{
              position: "absolute",
              left: `calc(50% + ${dir * (eyeOffsetX + listeningOffset) + eyeTrackX}px)`,
              top: `calc(50% + ${eyeY + eyeTrackY}px)`,
              width: eyeSize,
              height: eyeSize,
              marginLeft: -eyeSize / 2,
              marginTop: -eyeSize / 2,
              borderRadius: "50%",
              background: "#1a0608",
              transition: "left 80ms ease-out, top 80ms ease-out",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes aan-spin { from { transform: rotate(45deg) rotate(0deg); } to { transform: rotate(45deg) rotate(360deg); } }
        @keyframes aan-swirl { 0%,100% { transform: scale(1) rotate(0deg); opacity: 0.9; } 50% { transform: scale(1.08) rotate(6deg); opacity: 1; } }
        @keyframes aan-shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </span>
  );
}

/** Alias for backward compatibility — use AanMascot */
export const DiamondMascot = AanMascot;

export default AanMascot;
