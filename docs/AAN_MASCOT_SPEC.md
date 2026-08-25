# Aan Mascot Spec

**Product:** Signals — AI-Powered Ecommerce Workspace  
**Component:** Aan (formerly Jiva/DiamondMascot)  
**Status:** Source of truth for Aan visual + interaction  
**Coral identity:** `#f46d76` (kept as Aan exception to Periwinkle System 01)  
**Spec version:** 1.0

---

## 1. Identity

- **Name:** Aan (canon). Aliases `Jiva`, `DiamondMascot` deprecated — keep only as code comment.
- **Character:** composed, intelligent, steady under pressure, watchful at rest, precise in motion, useful in context (`ANARIX_VISUAL_DESIGN §24`).
- **Coral palette (exception):**
  ```
  CORAL.base  #f46d76
  CORAL.light #f88a93
  CORAL.deep  #f05e6a
  ```
  Radial gradient `circle at 50% 38%, light 0% → #f57780 42% → base 78% → deep 100%` + sheen `rgba(255,255,255,0.22)` + periwinkle ring `rgba(167,174,242,0.18)`. Keep as defined in `DiamondMascot.tsx`. Do not migrate to Periwinkle `#4A62D9` — coral is Aan-only signal.

## 2. States

Per `ANARIX_INTERACTION_DESIGN §20` + `ANARIX_VISUAL_DESIGN §26`:

| State | Shape | Use | Visual |
|-------|-------|-----|--------|
| `idle` | Diamond 45deg, 18% radius | Default, ready | Coral radial, fixed dot eyes `#1a0608` |
| `listening` | Circle 50% | Receiving intent/context | Same coral, eyes offset changes |
| `thinking` | Cube (spinning + liquid swirl) | Analytical reasoning | 3D cube illusion, inner swirl |
| `working` / `loading` | Bar / Pill progress | Bridging prompt→output / executing | Horizontal pill, progress shimmer |

## 3. Sizes

Per `ANARIX_VISUAL_DESIGN §16`: 16px tables, 20px buttons, 24px headers. Mascot sizes:
- `16` — inline list/table
- `20` — button adornment
- `24` (default) — header/card
- `32–40` — small interactive
- `64` — hero / chat dock example `<AanMascot size={64} state="listening" />`
- `>40` gets outer shadow `0 26px 64px -28px rgba(244,109,118,0.5)`

## 4. Interactivity

**Full interactive** (use in: chat dock, prompt entry, copilot panels, split view, Action Island, insight notices — `VISUAL §25`, `INTERACTION §13`):

- Mouse cursor eye tracking + body lean (`trackCursor` + `useEffect mousemove` — eyes follow `eyeOffsetX = size*0.18`, `eyeY = size*0.04`, lean via `transform: translate`)
- Hover: `stretchX 1.06 / stretchY 0.95`, radius `18%→30%`
- Listening → circle (via `deriveShape(state)`)
- Thinking → cube spinning + liquid swirl
- Working → bar (progress pill)

**Static** (use in: tables, lists, cards, anywhere density matters):

- `trackCursor={false}` or `interactive={false}` — no mousemove, no hover stretch, fixed dot eyes.

## 5. Props

```tsx
type AanState = "idle" | "listening" | "thinking" | "working"

interface AanMascotProps {
  size?: number // default 24
  state?: AanState // default "idle"
  interactive?: boolean // default true when size>=32 else false
  trackCursor?: boolean // default interactive
  className?: string
}
```

Keep `DiamondMascot` export as alias for backward compat.

## 6. Motion

Per `INTERACTION §21` + `VISUAL §29`: subtle only — panels, dropdowns, selection, AI state changes. No bounce, no spring, no particle, no constant mascot animation, no artificial delay.

## 7. Visual Rules

Per `VISUAL §38` anti-patterns:
- Do not recolor Aan (keep coral)
- Do not use Allura outside Aan
- Do not use Aan gradient (`VISUAL §7` periwinkle gradient) outside Aan — coral is the Aan gradient now
- Do not use coral success/destructive colors decoratively
- Do not place Aan in static decorative chrome

## 8. Accessibility

- `aria-hidden` on decorative span
- Parent button must have `aria-label` (e.g., "Ask Aan")
- Do not rely on color alone — eyes provide contrast `#1a0608` on coral

## 9. Future

Mascot is strategy-agnostic — keep 4 states extensible. If new state needed, update this spec first per `OPENCODE_PROTOCOLS §3.5` refinement.
