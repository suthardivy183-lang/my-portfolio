import { motion } from 'framer-motion'
import Navbar from './Navbar'
import StoneReveal from './StoneReveal'

const STONE_LEFT_BASE  = 'https://qclay.design/lovable/synex/stone-left.png'
const STONE_LEFT_GRASS = 'https://qclay.design/lovable/synex/stone-g-left.png'
const STONE_RIGHT_BASE = 'https://qclay.design/lovable/synex/stone-right.png'
const STONE_RIGHT_GRASS= 'https://qclay.design/lovable/synex/stone-g-right.png'
const DASHBOARD        = 'https://qclay.design/lovable/synex/Dashboard.png'
const STAR             = 'https://qclay.design/lovable/synex/star.svg'

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', background: '#F2F2F0' }}
    >
      {/* Soft radial halo behind the headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(220,220,215,0.6) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <Navbar />

      {/* ─── TEXT (z 2) ─── */}
      <div
        className="relative flex flex-col items-center text-center px-4"
        style={{ zIndex: 2, paddingTop: 'clamp(90px, 12vw, 140px)' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(12px, 1.1vw, 14px)',
            color: 'rgba(0,0,0,0.50)',
            letterSpacing: '0.04em',
            marginBottom: 14,
          }}
        >
          Software Developer
        </motion.p>

        <h2
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            lineHeight: 1.05,
            fontSize: 'clamp(34px, 5.6vw, 68px)',
            margin: 0,
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="block"
            style={{ color: 'rgba(0,0,0,0.20)' }}
          >
            Building Software
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.32, ease: 'easeOut' }}
            className="block"
            style={{ color: '#05050C' }}
          >
            with Craft &amp; Care
          </motion.span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(14px, 1.45vw, 18px)',
            color: 'rgba(0,0,0,0.40)',
            maxWidth: 460,
            marginTop: 18,
            lineHeight: 1.55,
          }}
        >
          Passionate developer exploring AI, full-stack, and startup ideas —
          turning curiosity into real products through hands-on engineering.
        </motion.p>
      </div>

      {/* ─── LEFT STONE (zBase 1, zGrass 2) ─── */}
      <StoneReveal
        side="left"
        baseSrc={STONE_LEFT_BASE}
        grassSrc={STONE_LEFT_GRASS}
        zBase={1}
        zGrass={2}
      />

      {/* ─── DASHBOARD (z 3) ─── */}
      <div
        className="absolute left-0 right-0 flex justify-center pointer-events-none"
        style={{ bottom: 0, zIndex: 3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: 'clamp(92vw, 60vw, 944px)',
            maxWidth: 944,
          }}
        >
          <img
            src={DASHBOARD}
            alt="Product dashboard preview"
            draggable={false}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '12px 12px 0 0',
              boxShadow:
                '0 -8px 80px rgba(0,0,0,0.12), 0 40px 120px rgba(0,0,0,0.10)',
              display: 'block',
            }}
          />
        </motion.div>
      </div>

      {/* ─── RIGHT STONE (zBase 4, zGrass 5) ─── */}
      <StoneReveal
        side="right"
        baseSrc={STONE_RIGHT_BASE}
        grassSrc={STONE_RIGHT_GRASS}
        zBase={4}
        zGrass={5}
      />

      {/* ─── BOTTOM DARK FADE (z 6) ─── */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none"
        style={{
          height: 220,
          zIndex: 6,
          background:
            'linear-gradient(to top, rgba(5,5,12,0.85) 0%, rgba(5,5,12,0.5) 40%, transparent 100%)',
        }}
      />

      {/* ─── SCROLL INDICATOR (z 20) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.2 },
          y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
        }}
        className="absolute left-0 right-0 mx-auto w-fit flex flex-row items-center"
        style={{ bottom: 16, zIndex: 20, gap: 8 }}
      >
        <motion.img
          src={STAR}
          alt=""
          width={14}
          height={14}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'block' }}
        />
        <span
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: '-0.28px',
            color: '#FFF',
          }}
        >
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}
