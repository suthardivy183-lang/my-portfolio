import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'

interface StoneRevealProps {
  side: 'left' | 'right'
  baseSrc: string
  grassSrc: string
  zBase: number
  zGrass: number
}

/**
 * Two stacked stone images.  The grass-covered version is masked through
 * a soft radial gradient that follows the cursor — a wet patch of moss
 * blooms under the user's finger and springs closed on leave.
 */
export default function StoneReveal({
  side,
  baseSrc,
  grassSrc,
  zBase,
  zGrass,
}: StoneRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const radiusRaw = useMotionValue(0)
  const radius = useSpring(radiusRaw, { stiffness: 200, damping: 25 })

  // Reactive mask string — recomputes whenever x / y / radius change
  const mask: MotionValue<string> = useTransform(
    [x, y, radius],
    (vals) => {
      const [xv, yv, rv] = vals as [number, number, number]
      return `radial-gradient(circle ${rv}px at ${xv}px ${yv}px, black 0%, black 40%, transparent 100%)`
    }
  )

  const initialX = side === 'left' ? -40 : 40
  const positionStyle: React.CSSProperties =
    side === 'left' ? { bottom: 0, left: 0 } : { bottom: 0, right: 0 }
  const objectPosition = side === 'left' ? 'left bottom' : 'right bottom'

  function handleMouseMove(e: React.MouseEvent) {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={wrapperRef}
      onMouseEnter={() => radiusRaw.set(120)}
      onMouseLeave={() => radiusRaw.set(0)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
      className="absolute w-fit cursor-crosshair"
      style={{
        ...positionStyle,
        zIndex: zBase,
        height: 'clamp(280px, 50vw, 680px)',
      }}
    >
      {/* Dry stone — base */}
      <img
        src={baseSrc}
        alt=""
        draggable={false}
        className="h-full w-auto select-none block"
        style={{ objectFit: 'contain', objectPosition }}
      />
      {/* Mossy stone — masked overlay */}
      <motion.img
        src={grassSrc}
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-auto pointer-events-none select-none"
        style={{
          objectFit: 'contain',
          objectPosition,
          zIndex: zGrass,
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
    </motion.div>
  )
}
