import { motion } from 'framer-motion'

/**
 * Inline-SVG watercolour florals (no external image assets -> no 404s on GitHub
 * Pages). The palette and density are tuned to match the printed-invitation look:
 * dusty-mauve / peach blooms with cream-gold centres, over sage, sage-grey, tan
 * and warm-brown foliage.
 */

// --- palette -----------------------------------------------------------------
const ROSE = '#C9A39B'
const ROSE_D = '#B7897E'
const PEACH = '#D9BBA1'
const MAUVE = '#BFA0A0'
const SAGE = '#9CAF88'
const SAGE_GREY = '#A8AE9C'
const TAN = '#BFA079'
const BROWN_LEAF = '#9C7C57'
const CREAM = '#F0E6D6'
const GOLD = '#D4AF37'

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
        <ellipse
          key={`o${deg}`}
          cx="0"
          cy="-10"
          rx="7.5"
          ry="12"
          fill={petal}
          opacity="0.55"
          transform={`rotate(${deg})`}
        />
      ))}
      {petals.map((deg) => (
        <ellipse
          key={`i${deg}`}
          cx="0"
          cy="-6"
          rx="4.5"
          ry="8"
          fill={petal}
          opacity="0.95"
          transform={`rotate(${deg + 30})`}
        />
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
 * Dense corner spray — foliage and blooms radiating out of the top-left corner.
 * Flip / rotate via `className` (or the `flip` prop) to reuse in any corner.
 */
export default function Floral({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      {/* soft watercolour wash behind the spray */}
      <g opacity="0.5">
        <ellipse cx="70" cy="70" rx="64" ry="52" fill={ROSE} opacity="0.22" />
        <ellipse cx="40" cy="120" rx="46" ry="60" fill={SAGE} opacity="0.2" />
        <ellipse cx="120" cy="45" rx="56" ry="40" fill={TAN} opacity="0.2" />
      </g>

      {/* leaves fanning from the corner toward the centre */}
      <g>
        <Leaf x={28} y={36} rot={28} s={1.1} fill={TAN} />
        <Leaf x={60} y={28} rot={48} s={1.15} fill={SAGE} />
        <Leaf x={96} y={30} rot={66} s={1.1} fill={SAGE_GREY} />
        <Leaf x={132} y={40} rot={82} s={1.0} fill={TAN} />
        <Leaf x={166} y={52} rot={98} s={0.9} fill={BROWN_LEAF} />
        <Leaf x={196} y={70} rot={112} s={0.8} fill={SAGE} />
        <Leaf x={30} y={66} rot={8} s={1.15} fill={SAGE_GREY} />
        <Leaf x={32} y={100} rot={-12} s={1.1} fill={TAN} />
        <Leaf x={40} y={134} rot={-30} s={1.0} fill={SAGE} />
        <Leaf x={54} y={166} rot={-48} s={0.9} fill={BROWN_LEAF} />
        <Leaf x={72} y={196} rot={-66} s={0.8} fill={SAGE_GREY} />
        <Leaf x={86} y={84} rot={50} s={0.8} fill={SAGE} />
        <Leaf x={112} y={74} rot={70} s={0.7} fill={TAN} />
        <Leaf x={78} y={116} rot={24} s={0.75} fill={SAGE_GREY} />
      </g>

      {/* blooms clustered near the corner */}
      <Bloom x={62} y={64} s={1.55} petal={ROSE} />
      <Bloom x={112} y={50} s={1.05} petal={PEACH} />
      <Bloom x={50} y={116} s={1.1} petal={ROSE_D} />
      <Bloom x={98} y={98} s={0.8} petal={MAUVE} n={5} />
      <Bloom x={150} y={62} s={0.7} petal={ROSE} n={5} />

      {/* buds & accents */}
      <Bud x={190} y={66} s={1} fill={TAN} />
      <Bud x={84} y={176} s={0.9} fill={ROSE_D} />
      <Bud x={26} y={150} s={0.8} fill={BROWN_LEAF} />
    </svg>
  )
}

/**
 * Lush round bouquet for flanking the gold ring (as in the reference card).
 */
export function FloralCluster({ className = '', flip = false }) {
  const ring = [12, 48, 84, 120, 156, 192, 228, 264, 300, 336]
  const fills = [SAGE, TAN, SAGE_GREY, BROWN_LEAF]
  return (
    <svg
      viewBox="0 0 180 180"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <g opacity="0.5">
        <ellipse cx="90" cy="90" rx="70" ry="62" fill={ROSE} opacity="0.18" />
        <ellipse cx="78" cy="100" rx="56" ry="62" fill={SAGE} opacity="0.16" />
      </g>

      {/* foliage fanning out in all directions */}
      <g>
        {ring.map((a, i) => {
          const rad = ((a - 90) * Math.PI) / 180
          const x = 90 + Math.cos(rad) * 30
          const y = 90 + Math.sin(rad) * 30
          return <Leaf key={a} x={x} y={y} rot={a} s={1.15} fill={fills[i % fills.length]} />
        })}
        {ring.map((a, i) => {
          const rad = ((a - 70) * Math.PI) / 180
          const x = 90 + Math.cos(rad) * 16
          const y = 90 + Math.sin(rad) * 16
          return <Leaf key={`b${a}`} x={x} y={y} rot={a + 18} s={0.8} fill={fills[(i + 1) % fills.length]} opacity={0.7} />
        })}
      </g>

      {/* central cluster of blooms */}
      <Bloom x={90} y={88} s={1.75} petal={ROSE} />
      <Bloom x={64} y={74} s={1.15} petal={PEACH} />
      <Bloom x={116} y={78} s={1.15} petal={ROSE_D} />
      <Bloom x={76} y={112} s={1.0} petal={MAUVE} />
      <Bloom x={112} y={110} s={0.95} petal={ROSE} n={5} />
      <Bud x={48} y={96} s={1} fill={TAN} />
      <Bud x={132} y={98} s={1} fill={BROWN_LEAF} />
      <Bud x={92} y={132} s={0.9} fill={ROSE_D} />
    </svg>
  )
}

/**
 * A lighter horizontal vine — good for framing under headings.
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
      <Bloom x={30} y={32} s={0.8} petal={ROSE} n={5} />
      <Bloom x={160} y={38} s={0.95} petal={PEACH} n={6} />
      <Bloom x={288} y={40} s={0.8} petal={ROSE_D} n={5} />
    </svg>
  )
}

/**
 * A small single-stem sprig for understated accents.
 */
export function Sprig({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 90 130"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
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
 * Animated wrapper: the floral slides in from an edge as it scrolls into view.
 */
export function FloralAccent({ from = 'left', className = '', flip = false, delay = 0 }) {
  const offset = { left: -60, right: 60, top: 0, bottom: 0 }[from] ?? -60
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset, y: from === 'top' ? -40 : from === 'bottom' ? 40 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Floral className="h-full w-full" flip={flip} />
    </motion.div>
  )
}
