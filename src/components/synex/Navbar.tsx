import { Globe } from 'lucide-react'

const NAV_LINKS = ['WORK', 'ABOUT', 'SKILLS', 'CONTACT'] as const

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center"
      style={{
        padding: '16px 40px',
        background: 'rgba(242,242,240,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* LEFT — wordmark */}
      <div className="justify-self-start flex items-center">
        <a
          href="#"
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: '-0.03em',
            color: '#05050C',
            textDecoration: 'none',
          }}
        >
          divy<span style={{ color: 'rgba(0,0,0,0.30)' }}>.</span>
        </a>
      </div>

      {/* MIDDLE — nav links */}
      <div className="justify-self-center hidden md:flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="transition-opacity duration-200 hover:opacity-55"
            style={{
              fontFamily: '"Inter Tight", sans-serif',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '1.5px',
              color: '#111111',
              padding: '8px 14px',
              textDecoration: 'none',
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* RIGHT — locale + CTA */}
      <div className="justify-self-end flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5">
          <Globe size={16} color="#111" strokeWidth={1.75} />
          <span
            style={{
              fontFamily: '"Inter Tight", sans-serif',
              fontWeight: 400,
              fontSize: 13,
              color: '#111',
            }}
          >
            English
          </span>
        </div>
        <a
          href="mailto:suthardivy183@gmail.com"
          className="flex items-center gap-2 transition-colors duration-200"
          style={{
            background: '#111111',
            color: '#fff',
            borderRadius: 9999,
            padding: '10px 20px',
            fontFamily: '"Inter Tight", sans-serif',
            fontWeight: 600,
            fontSize: 13,
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#333333'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#111111'
          }}
        >
          <span
            style={{
              position: 'relative',
              width: 18,
              height: 18,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.20)',
              }}
            />
            <span
              style={{
                position: 'relative',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#fff',
              }}
            />
          </span>
          Say hello
        </a>
      </div>
    </nav>
  )
}
