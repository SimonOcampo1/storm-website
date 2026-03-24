import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const links = [
  { to: '/',           label: 'EL ATLAS' },
  { to: '/vortice',    label: 'VÓRTICE' },
  { to: '/telemetria', label: 'TELEMETRÍA' },
  { to: '/archivo',    label: 'ARCHIVO' },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScrolled(false);
    setMenuOpen(false);

    const onScroll = () => {
      const threshold = isHome ? 100 : 40;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome, location.pathname]);

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled || menuOpen
            ? 'rgba(3, 4, 8, 0.92)'
            : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled || menuOpen
            ? '1px solid rgba(132,149,136,0.15)'
            : '1px solid transparent',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5 md:py-6">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-extralight tracking-[0.25em] text-primary font-headline"
          >
            SENTINEL
          </NavLink>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map(({ to, label }) => {
              const isActive =
                to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(to);
              return (
                <NavLink
                  key={to}
                  to={to}
                  className={`font-mono text-[10px] tracking-widest uppercase transition-all duration-300 relative
                    ${isActive
                      ? 'text-primary'
                      : 'text-white/40 hover:text-white/80'
                    }`}
                >
                  {label}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0%' }}
                  />
                </NavLink>
              );
            })}
          </nav>

          {/* Right: telemetry badge (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 select-none pointer-events-none">
              <span className="material-symbols-outlined text-primary text-[14px]">sensors</span>
              <span className="font-mono text-[9px] text-primary/50 tracking-[0.2em]">
                SISTEMA_NOMINAL
              </span>
            </div>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span
                className="block w-6 h-[1px] bg-primary transition-all duration-300"
                style={{
                  transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-[1px] bg-primary transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-[1px] bg-primary transition-all duration-300"
                style={{
                  transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-start px-8 transition-all duration-500"
        style={{
          background: 'rgba(3,4,8,0.97)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none grid-overlay" />

        <nav className="flex flex-col gap-10 w-full">
          {links.map(({ to, label }, i) => {
            const isActive =
              to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(to);
            return (
              <NavLink
                key={to}
                to={to}
                className={`font-headline font-extralight text-4xl tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-4
                  ${isActive ? 'text-primary' : 'text-white/50 hover:text-white/90'}`}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              >
                <span className="font-mono text-[10px] text-primary/40 w-8">{String(i + 1).padStart(2, '0')}</span>
                {label}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom telemetry info */}
        <div className="absolute bottom-12 left-8 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-[14px]">sensors</span>
          <span className="font-mono text-[9px] text-primary/40 tracking-[0.2em]">SISTEMA_NOMINAL</span>
        </div>
      </div>
    </>
  );
}
