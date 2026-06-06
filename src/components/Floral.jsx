import { motion } from 'framer-motion'

/**
 * Real watercolour florals, cut out (background removed) from the supplied
 * `demo_floral.png` clip sheet and exported as transparent WebP into
 * `src/assets/florals/`. Each export below maps a decorative *role* used around
 * the site to one of those cutouts, so every consumer keeps the same API while
 * rendering the actual artwork instead of the previous hand-drawn SVG.
 */

// --- the cut-out assets ------------------------------------------------------
import bouquetLeft from '../assets/florals/bouquet-left.webp'
import bouquetRight from '../assets/florals/bouquet-right.webp'
import peonyPeach from '../assets/florals/peony-peach.webp'
import bloomWhite from '../assets/florals/bloom-white.webp'
import roseBlush from '../assets/florals/rose-blush.webp'
import peonyMauve from '../assets/florals/peony-mauve.webp'
import frameSquare from '../assets/florals/frame-square.webp'
import frameRose from '../assets/florals/frame-rose.webp'

// Named variants so call-sites can pick a specific bloom for visual variety.
export const FLORALS = {
  'bouquet-left': bouquetLeft,
  'bouquet-right': bouquetRight,
  peony: peonyPeach,
  white: bloomWhite,
  rose: roseBlush,
  mauve: peonyMauve,
  'frame-square': frameSquare,
  'frame-rose': frameRose,
}

const GOLD = '#D4AF37'
const BROWN_LEAF = '#9C7C57'
const SAGE = '#9CAF88'
const TAN = '#BFA079'
const SAGE_GREY = '#A8AE9C'
const ROSE = '#C9A39B'
const CREAM = '#F0E6D6'

/**
 * Base image renderer. `flip` mirrors horizontally so one cutout can frame the
 * opposite corner; extra transforms can be layered via the `style` prop.
 */
export function FloralImg({ src, alt = '', className = '', flip = false, style }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable="false"
      aria-hidden={alt === '' ? 'true' : undefined}
      className={`h-full w-full select-none object-contain ${className}`}
      style={flip ? { transform: 'scaleX(-1)', ...style } : style}
    />
  )
}

/**
 * Corner spray — the dense floral used to frame page corners. `variant` picks
 * which bloom (defaults to the lush right-hand bouquet).
 */
export default function Floral({ variant = 'bouquet-right', className = '', flip = false, style }) {
  return <FloralImg src={FLORALS[variant] ?? FLORALS['bouquet-right']} className={className} flip={flip} style={style} />
}

/**
 * Lush round bouquet for flanking the gold ring (as in the reference card).
 * Uses the two matched corner bouquets from the sheet.
 */
export function FloralCluster({ className = '', flip = false, style }) {
  return <FloralImg src={flip ? FLORALS['bouquet-right'] : FLORALS['bouquet-left']} className={className} flip={flip} style={style} />
}

/**
 * A small single-stem sprig for understated accents. Kept as inline SVG (the
 * previous hand-drawn design): it scales to any size without the wide eucalyptus
 * cutout's awkward letterboxing, so it stays tidy on narrow / mobile viewports.
 */
export function Sprig({ className = '', flip = false, style }) {
  return (
    <svg
      viewBox="0 0 90 130"
      className={className}
      style={flip ? { transform: 'scaleX(-1)', ...style } : style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M45 128 C 40 88, 42 54, 45 18" stroke={BROWN_LEAF} strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
      <Leaf x={45} y={96} rot={-58} s={0.95} fill={SAGE} />
      <Leaf x={45} y={96} rot={58} s={0.9} fill={TAN} />
      <Leaf x={45} y={68} rot={-52} s={0.9} fill={SAGE_GREY} />
      <Leaf x={45} y={68} rot={52} s={0.85} fill={BROWN_LEAF} />
      <Leaf x={45} y={44} rot={-40} s={0.8} fill={SAGE} />
      <Bloom x={45} y={20} s={1.0} petal={ROSE} />
      <Bud x={45} y={108} s={0.9} fill={TAN} />
    </svg>
  )
}

/**
 * A lighter horizontal vine — good for framing under headings. Kept as inline
 * SVG: the clip sheet has no horizontal-vine element, and this delicate gold
 * rule with a few leaves complements the cut-out blooms.
 */
export function Vine({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 300 80"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 40 C 70 12, 110 68, 160 36 S 250 14, 294 40"
        stroke={BROWN_LEAF}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <Leaf x={70} y={26} rot={45} s={0.9} fill={SAGE} />
      <Leaf x={120} y={54} rot={200} s={0.85} fill={TAN} />
      <Leaf x={196} y={26} rot={50} s={0.9} fill={SAGE_GREY} />
      <Leaf x={250} y={52} rot={205} s={0.8} fill={BROWN_LEAF} />
      <Leaf x={40} y={48} rot={170} s={0.8} fill={SAGE} />
      <circle cx="150" cy="40" r="3.2" fill={GOLD} opacity="0.8" />
      <circle cx="30" cy="34" r="2.4" fill={ROSE} opacity="0.8" />
      <circle cx="288" cy="40" r="2.4" fill={ROSE} opacity="0.8" />
    </svg>
  )
}

const LEAF_PATH = 'M0 0 C -7 -16, -3 -38, 0 -46 C 3 -38, 7 -16, 0 0 Z'

// A single watercolour leaf, pointing "up" by default; rotate via `rot`.
function Leaf({ x, y, rot = 0, s = 1, fill = SAGE, opacity = 0.85 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`} opacity={opacity}>
      <path d={LEAF_PATH} fill={fill} />
      <path d="M0 -2 L0 -42" stroke={CREAM} strokeWidth="0.8" opacity="0.5" />
    </g>
  )
}

// A layered round bloom.
function Bloom({ x, y, s = 1, petal = ROSE, center = CREAM, n = 6 }) {
  const petals = Array.from({ length: n }, (_, i) => (i * 360) / n)
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {petals.map((deg) => (
        <ellipse key={`o${deg}`} cx="0" cy="-10" rx="7.5" ry="12" fill={petal} opacity="0.55" transform={`rotate(${deg})`} />
      ))}
      {petals.map((deg) => (
        <ellipse key={`i${deg}`} cx="0" cy="-6" rx="4.5" ry="8" fill={petal} opacity="0.95" transform={`rotate(${deg + 30})`} />
      ))}
      <circle r="5.5" fill={center} />
      <circle r="2.2" fill={GOLD} opacity="0.75" />
    </g>
  )
}

function Bud({ x, y, s = 1, fill = TAN }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <ellipse cx="0" cy="0" rx="4" ry="6" fill={fill} opacity="0.9" />
      <circle r="2" fill={GOLD} opacity="0.6" />
    </g>
  )
}

/**
 * Animated wrapper: the floral slides in from an edge as it scrolls into view.
 */
export function FloralAccent({ from = 'left', variant = 'bouquet-right', className = '', flip = false, delay = 0 }) {
  const offset = { left: -60, right: 60, top: 0, bottom: 0 }[from] ?? -60
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset, y: from === 'top' ? -40 : from === 'bottom' ? 40 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Floral variant={variant} className="h-full w-full" flip={flip} />
    </motion.div>
  )
}
