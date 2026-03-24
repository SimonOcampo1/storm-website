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

  useEffect(() => {
    // Reset on route change
    setScrolled(false);
    
    const onScroll = () => {
      // Use a larger threshold on home page so it stays transparent during hero scroll
      // but turns opaque well before reaching the ATLAS title.
      // On other pages, use a small 40px threshold.
      const threshold = isHome ? 100 : 40;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial check
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome, location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(3, 4, 8, 0.75)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(132,149,136,0.15)'
          : '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between px-12 py-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-extralight tracking-[0.25em] text-primary font-headline"
        >
          SENTINEL
        </NavLink>

        {/* Nav links */}
        <nav className="flex items-center gap-10">
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
                {/* active underline */}
                <span
                  className="absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300"
                  style={{ width: isActive ? '100%' : '0%' }}
                />
              </NavLink>
            );
          })}
        </nav>

        {/* Right telemetry badge */}
        <div className="flex items-center gap-2 select-none pointer-events-none">
          <span className="material-symbols-outlined text-primary text-[14px]">sensors</span>
          <span className="font-mono text-[9px] text-primary/50 tracking-[0.2em] hidden md:block">
            SISTEMA_NOMINAL
          </span>
        </div>
      </div>
    </header>
  );
}
