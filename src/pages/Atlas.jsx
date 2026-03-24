import { useRef, useEffect } from 'react';
import Footer from '../components/Footer';

// Kp-index bar chart data (fake but scientifically plausible)
const kpData = [
  { hour: '00', kp: 2 }, { hour: '03', kp: 3 }, { hour: '06', kp: 5 },
  { hour: '09', kp: 7 }, { hour: '12', kp: 6 }, { hour: '15', kp: 4 },
  { hour: '18', kp: 8 }, { hour: '21', kp: 5 }, { hour: 'NOW', kp: 6 },
];

function KpBar({ kp, hour }) {
  const maxKp = 9;
  const pct = (kp / maxKp) * 100;
  const color =
    kp >= 7 ? '#ff4444' :
    kp >= 5 ? '#ffa500' :
    '#00FFA3';
  return (
    <div className="flex flex-col items-center gap-1 flex-1">
      <span className="font-mono text-[8px] text-on-surface/40">{kp}</span>
      <div className="w-full bg-[rgba(132,149,136,0.1)] relative" style={{ height: 56 }}>
        <div
          className="absolute bottom-0 w-full transition-all duration-700"
          style={{ height: `${pct}%`, background: color, opacity: 0.85 }}
        />
      </div>
      <span className="font-mono text-[8px] text-on-surface/30">{hour}</span>
    </div>
  );
}

export default function Atlas() {
  const videoRef = useRef(null);
  const titleRef = useRef(null);

  // Force play the video — some browsers block autoplay until explicitly called
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const attempt = () => {
      video.play().catch(() => {
        setTimeout(() => video.play().catch(() => {}), 500);
      });
    };
    if (video.readyState >= 2) {
      attempt();
    } else {
      video.addEventListener('canplay', attempt, { once: true });
    }
    return () => video.removeEventListener('canplay', attempt);
  }, []);

  return (
    <div className="text-on-surface font-body overflow-x-hidden selection:bg-primary selection:text-background min-h-screen" style={{ background: 'transparent', position: 'relative', zIndex: 1 }}>

      {/* Fixed video background — always behind all page content */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100svh', zIndex: -1, overflow: 'hidden' }}>
        <img
          src="/thunder.png"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
        >
          <source src="/storm-video.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to bottom, rgba(3,4,8,0.3), rgba(3,4,8,0.6))' }} />
        <div className="grid-overlay" style={{ position: 'absolute', inset: 0, zIndex: 3 }} />
      </div>

      {/* ── Hero section ── */}
      <main className="relative min-h-[100svh] flex flex-col justify-end pb-32 md:pb-20 px-6 md:px-12 lg:px-24">

        {/* Top telemetry overlays — hidden on small screens */}
        <div className="hidden sm:flex absolute top-28 left-6 md:left-12 flex-col gap-1.5 opacity-60 pointer-events-none select-none">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary">ID_ESTACIÓN: ALPHA-01</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-on-surface/70">INTENSIDAD_SEÑAL: 98.4%</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-on-surface/70">TIEMPO_ACTIVO: 452:12:08</span>
        </div>
        <div className="hidden sm:flex absolute top-28 right-6 md:right-20 text-right flex-col gap-1.5 opacity-60 pointer-events-none select-none">
          <span className="font-mono text-[10px] tracking-[0.3em] text-on-surface/70">78.2232° N, 15.6267° E</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary">ESTADO_SISTEMA: NOMINAL</span>
        </div>

        {/* Hero title */}
        <div className="flex flex-col gsap-fade-in">
          <h1
            ref={titleRef}
            className="font-headline text-[18vw] sm:text-[14vw] md:text-[10rem] font-extralight tracking-[0.1em] text-on-surface leading-none select-none"
          >
            EL ATLAS
          </h1>
          <div className="mt-4 md:mt-8 flex items-center gap-4 md:gap-6">
            <div className="h-[1px] w-12 md:w-24 bg-primary" />
            <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-60">Protocolo de Cartografía Expedicionaria</p>
          </div>
        </div>
      </main>

      {/* ── Dashboard grid ── */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* Radar / map */}
          <div className="lg:col-span-8 relative gsap-fade-in">
            <div className="absolute -top-4 -left-0 md:-left-4 font-mono text-[10px] text-primary/40 uppercase">Nodo Radar Global 01</div>
            <div className="bg-surface-variant backdrop-blur-2xl p-1 relative overflow-hidden ring-1 ring-[rgba(132,149,136,0.2)] mt-4">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src="/telemetry.png"
                  alt="Mapa topográfico digital"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-[30%] left-[45%] flex flex-col items-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                  </span>
                  <div className="mt-2 bg-background/90 backdrop-blur-md px-2 py-1 border border-primary/30">
                    <p className="font-mono text-[9px] text-on-surface">TORMENTA VO-88</p>
                  </div>
                </div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex gap-2 md:gap-4">
                  <button className="bg-primary px-4 md:px-6 py-2 text-on-primary font-bold text-[10px] md:text-xs uppercase tracking-widest hover:brightness-110 transition-all">REG_TELEMETRÍA</button>
                  <button className="hidden sm:block bg-background/80 backdrop-blur-md border border-primary px-4 md:px-6 py-2 text-primary font-mono text-xs uppercase hover:bg-primary/10 transition-all">VER_MODELO_3D</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">

            {/* Current vitals */}
            <div className="bg-surface-variant backdrop-blur-xl p-6 md:p-8 ring-1 ring-[rgba(132,149,136,0.2)] gsap-fade-in">
              <h3 className="font-mono text-[10px] text-primary tracking-widest uppercase mb-6 md:mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">sensors</span> Datos en Tiempo Real
              </h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  { label: 'Varianza Magnética',   val: '42.88', unit: 'nT',    badge: '+0.02%', badgeColor: 'text-primary' },
                  { label: 'Índice de Flujo Solar', val: '184.2', unit: 'IFS',   badge: 'ALERTA', badgeColor: 'text-error' },
                  { label: 'Densidad de Protones',  val: '12.4',  unit: 'P/CM³', badge: 'ESTABLE', badgeColor: 'text-primary' },
                ].map(({ label, val, unit, badge, badgeColor }) => (
                  <div key={label} className="flex justify-between items-end border-b border-[rgba(132,149,136,0.2)] pb-2">
                    <div>
                      <p className="font-mono text-[10px] opacity-40 uppercase">{label}</p>
                      <p className="font-mono text-xl md:text-2xl font-light">{val} <span className="text-xs opacity-40">{unit}</span></p>
                    </div>
                    <div className={`font-mono text-[10px] pb-1 ${badgeColor}`}>{badge}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geomagnetic Activity (Kp-index) */}
            <div className="bg-surface-variant backdrop-blur-xl p-6 md:p-8 ring-1 ring-[rgba(132,149,136,0.2)] flex-grow gsap-fade-in">
              <h3 className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">electric_bolt</span> Actividad Geomagnética
              </h3>
              <p className="font-mono text-[8px] text-on-surface/30 mb-4 md:mb-6 tracking-widest">ÍNDICE Kp · ÚLTIMAS 24H</p>

              <div className="flex items-end gap-1 mb-4">
                {kpData.map(({ hour, kp }) => (
                  <KpBar key={hour} hour={hour} kp={kp} />
                ))}
              </div>

              {/* threshold legend */}
              <div className="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6">
                {[{ color: '#00FFA3', label: 'Calma (0-4)' }, { color: '#ffa500', label: 'Activo (5-6)' }, { color: '#ff4444', label: 'Tormenta (7-9)' }].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <span className="font-mono text-[8px] text-on-surface/40">{label}</span>
                  </div>
                ))}
              </div>

              <p className="font-body text-sm font-light leading-relaxed opacity-60">
                Flujo de partículas de alta energía a 72°N. Probabilidad de visibilidad de Aurora Boreal: <span className="text-primary font-mono">88%</span> para las próximas 48 horas.
              </p>
            </div>
          </div>

          {/* Stats row */}
          {[
            { label: 'Celdas de Tormenta Activas', val: '14',   unit: '',    icon: 'thunderstorm' },
            { label: 'Conectividad de Estación',    val: '99.9', unit: '%',   icon: 'cell_tower' },
            { label: 'Profundidad del Horizonte',   val: '12.4', unit: ' KM', icon: 'altitude' },
          ].map(({ label, val, unit, icon }) => (
            <div key={label} className="col-span-1 md:col-span-4 bg-surface-variant backdrop-blur-xl p-6 md:p-8 ring-1 ring-[rgba(132,149,136,0.2)] flex items-center justify-between gsap-fade-in">
              <div>
                <h4 className="font-mono text-[10px] uppercase opacity-40 tracking-widest mb-1">{label}</h4>
                <p className="font-mono text-3xl md:text-4xl font-light">
                  {val}<span className="text-lg opacity-40">{unit}</span>
                </p>
              </div>
              <span className="material-symbols-outlined text-3xl md:text-4xl text-primary/20">{icon}</span>
            </div>
          ))}

        </div>
      </section>

      {/* Footer inline */}
      <footer className="border-t border-[rgba(132,149,136,0.15)] backdrop-blur-md px-6 md:px-12 py-5 md:py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[9px] text-on-surface/40 tracking-[0.2em] uppercase">SISTEMA_LISTO // 45.8231° N, 6.8650° E</span>
        </div>
        <div className="hidden sm:flex gap-6 md:gap-10">
          {['LATENCIA_12MS', 'ATMOS_ESTABLE', 'VOID_SYNC'].map(t => (
            <span key={t} className="font-mono text-[9px] text-on-surface/25 tracking-[0.3em] uppercase hover:text-on-surface/60 transition-colors cursor-default">{t}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}
