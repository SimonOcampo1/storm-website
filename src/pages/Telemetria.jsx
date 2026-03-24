import Footer from '../components/Footer';

export default function Telemetria() {
  return (
    <div className="bg-[#030408] text-on-surface font-body min-h-screen overflow-x-hidden selection:bg-primary/30">
      <main className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Header */}
        <header className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 gsap-fade-in">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest mb-3 md:mb-4">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-[10px] md:text-sm">PARÁMETROS OPERACIONALES DE MISIÓN</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-headline font-extralight tracking-[0.1em] text-on-surface uppercase">PERFIL DE MISIÓN</h1>
          </div>
          <div className="flex flex-row md:flex-col md:items-end gap-4 md:gap-0 font-mono text-xs text-on-surface/40 tracking-tighter">
            <span>LAT: 64.1265° N</span>
            <span>LON: 21.8174° W</span>
            <span className="text-primary mt-0 md:mt-1 text-[10px]">ESTADO: ENLACE_ENCRIPTADO_ESTABLECIDO</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-10 md:space-y-16">
            {/* Map */}
            <div className="relative aspect-video w-full bg-[#0c0e14] border border-[rgba(132,149,136,0.2)] group gsap-fade-in">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,255,163,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
              <img
                src="/telemetry.png"
                alt="Mapa de terreno con líneas de expedición"
                className="w-full h-full object-cover grayscale contrast-125 opacity-40 mix-blend-luminosity"
              />
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450">
                <path d="M100,350 L250,280 L400,310 L550,150 L700,100" fill="none" stroke="#00FFA3" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="100" cy="350" r="4" fill="#00FFA3" />
                <circle cx="700" cy="100" r="4" fill="#00FFA3" />
                <text x="110" y="365" fill="#00FFA3" fontFamily="JetBrains Mono" fontSize="10">BASE_ALPHA</text>
                <text x="680" y="90" fill="#00FFA3" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end">OBJETIVO_VACÍO</text>
              </svg>
              <div className="absolute top-4 md:top-6 left-4 md:left-6 font-mono text-[10px] text-primary space-y-1">
                <div>MODO_ESCAN: TOPOGRÁFICO</div>
                <div>ACIMUT: 284.5°</div>
              </div>
              <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 font-mono text-[10px] text-on-surface/40 text-right">
                <div>REF_GRD: UTM_ZONA_27N</div>
                <div>ESCALA: 1:25,000</div>
              </div>
            </div>

            {/* Requirements */}
            <section className="space-y-6 md:space-y-8 gsap-fade-in">
              <h3 className="font-mono text-xs tracking-widest text-on-surface/60 uppercase">Matriz de Requisitos_</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[rgba(132,149,136,0.2)]">
                {[
                  { code: '01_ENTORNO',        title: 'Operaciones Criogénicas', desc: 'Certificado para exposición sostenida a -40°C en zonas de viento de alta velocidad.' },
                  { code: '02_CONECTIVIDAD',   title: 'Enlace Satelital',        desc: 'Mínimo 400 Mbps de enlace ascendente encriptado para flujo de telemetría en tiempo real.' },
                  { code: '03_AUTONOMÍA',      title: 'Sistema Híbrido Solar',   desc: 'Ventana de misión de 14 días sin reabastecimiento externo de energía.' },
                  { code: '04_DISCRECIÓN',     title: 'Perfil Reducido',         desc: 'Reducción de sección radar optimizada para investigación atmosférica.' },
                ].map(({ code, title, desc }) => (
                  <div key={code} className="bg-background p-5 md:p-6 space-y-3 md:space-y-4">
                    <span className="font-mono text-[10px] text-primary/60">{code}</span>
                    <div className="text-lg md:text-xl font-headline font-light">{title}</div>
                    <p className="text-xs text-on-surface/40 leading-relaxed font-body">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-10 md:space-y-16">
            {/* Risk Panel */}
            <div className="p-8 md:p-10 bg-surface-variant glass-panel border border-[rgba(132,149,136,0.2)] gsap-fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 md:mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-extralight tracking-wide italic">Evaluación de Riesgo</h2>
                <span className="font-mono text-[10px] bg-primary/10 text-primary px-3 py-1 whitespace-nowrap">NIVEL: ELEVADO</span>
              </div>
              <div className="space-y-8 md:space-y-10">
                {[
                  { label: 'Volatilidad Atmosférica',  pct: 84, badge: '84% CRÍTICO',  color: 'bg-primary' },
                  { label: 'Inestabilidad Térmica',    pct: 22, badge: '22% NOMINAL',  color: 'bg-on-surface/20' },
                  { label: 'Fluctuaciones EMI',        pct: 59, badge: '59% ADVERTENCIA', color: 'bg-primary/50' },
                ].map(({ label, pct, badge, color }) => (
                  <div key={label} className="space-y-3">
                    <div className="flex justify-between font-mono text-[10px] tracking-tighter uppercase">
                      <span>{label}</span>
                      <span className={pct >= 60 ? 'text-primary' : ''}>{badge}</span>
                    </div>
                    <div className="h-px w-full bg-[rgba(132,149,136,0.2)] relative">
                      <div className={`absolute top-0 left-0 h-full ${color}`} style={{ width: `${pct}%` }} />
                      {pct >= 60 && <div className="absolute top-[-3px] left-[84%] w-[7px] h-[7px] bg-primary rotate-45" />}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 md:mt-16 grid grid-cols-2 gap-6 md:gap-8 border-t border-[rgba(132,149,136,0.2)] pt-6 md:pt-8">
                <div>
                  <div className="font-mono text-[9px] text-on-surface/30 mb-1">TORMENTA_ETA</div>
                  <div className="text-lg md:text-xl font-headline tracking-tighter">04:22:15</div>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-on-surface/30 mb-1">CLASE_VÓRTICE</div>
                  <div className="text-lg md:text-xl font-headline tracking-tighter">V4_EXTREMO</div>
                </div>
              </div>
            </div>

            {/* Logistics */}
            <div className="space-y-6 md:space-y-8 gsap-fade-in">
              <h3 className="font-mono text-xs tracking-widest text-on-surface/60 uppercase">Logística Activa_</h3>
              <div className="space-y-4">
                {[
                  { icon: 'satellite_alt', title: 'Sentinel Hub S1',   id: 'ST-0988-X' },
                  { icon: 'ac_unit',       title: 'Exoesqueleto Térmico', id: 'TH-MK4-ALPHA' },
                ].map(({ icon, title, id }) => (
                  <div key={id}>
                    <div className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#282a30] flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary/60">{icon}</span>
                        </div>
                        <div>
                          <div className="text-sm font-headline tracking-wide uppercase">{title}</div>
                          <div className="font-mono text-[10px] text-on-surface/40">ID: {id}</div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-on-surface/20 group-hover:text-primary transition-colors">arrow_forward</span>
                    </div>
                    <div className="w-full h-px bg-[rgba(132,149,136,0.1)] mt-4" />
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-primary text-on-primary py-5 md:py-6 font-headline font-bold tracking-[0.2em] uppercase hover:opacity-90 active:scale-[0.98] transition-all gsap-fade-in text-sm md:text-base">
              INICIAR SECUENCIA DE DESPLIEGUE
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
