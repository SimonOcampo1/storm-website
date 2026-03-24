import Footer from '../components/Footer';

export default function Vortice() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary overflow-x-hidden min-h-screen">
      <main className="relative pt-0 min-h-screen">

        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex flex-col justify-center px-12 overflow-hidden py-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/thunder.png"
              alt="Epic lightning striking over dark water"
              className="w-full h-full object-cover object-center opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>

          <div className="relative z-10">
            <h1 className="font-headline font-extralight text-7xl md:text-8xl tracking-[0.1em] leading-tight mb-8 text-on-surface uppercase">
              RELÁMPAGO DEL<br />CATATUMBO
            </h1>
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="max-w-xl">
                <p className="font-serif text-2xl font-light leading-relaxed text-on-surface-variant italic">
                  "La tormenta eterna donde el cielo se funde con el asfalto del agua. Una descarga de 1.6 millones de voltios que nunca duerme."
                </p>
              </div>
              <div className="flex flex-col gap-2 font-mono text-[10px] text-primary/60 border-l border-[rgba(132,149,136,0.2)] pl-6">
                <div className="flex justify-between w-48"><span>LATITUD</span><span>9.3333° N</span></div>
                <div className="flex justify-between w-48"><span>LONGITUD</span><span>71.7500° W</span></div>
                <div className="flex justify-between w-48"><span>FRECUENCIA</span><span>280/hr</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-12 py-24 bg-background">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 bg-[#1a1b21] p-10 flex flex-col justify-between border-l-2 border-primary gsap-fade-in">
              <div>
                <span className="font-mono text-[10px] text-primary mb-6 block">MODULO_BIO_QUIMICO</span>
                <h3 className="text-3xl font-headline font-light mb-6">El Generador de Ozono de la Tierra</h3>
                <p className="text-on-surface-variant font-body leading-relaxed">Aislado en la cuenca del Lago de Maracaibo, este fenómeno es considerado la principal fuente de regeneración de la capa de ozono en el planeta.</p>
              </div>
              <div className="mt-12 flex items-center gap-4 text-primary text-sm font-mono cursor-pointer hover:gap-6 transition-all">
                EXPLORAR TELEMETRÍA QUÍMICA <span className="material-symbols-outlined">east</span>
              </div>
            </div>

            <div className="md:col-span-8 relative aspect-video bg-[#282a30] group overflow-hidden gsap-fade-in">
              <img
                src="/nube-descarga.png"
                alt="Lightning branching across clouds"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute bottom-8 left-8 glass-panel p-6 border border-[rgba(132,149,136,0.2)]">
                <p className="font-mono text-[10px] text-white/40 mb-2">CAPTURA: SENTINEL-04</p>
                <p className="text-sm font-body tracking-wider">DESCARGA NUBE-A-NUBE [TIPO B]</p>
              </div>
            </div>

            <div className="md:col-span-3 aspect-[3/4] overflow-hidden relative group gsap-fade-in">
              <img
                src="/dark_swamp_catatumbo_1774333533728.png"
                alt="Dark swamp under stormy purple sky"
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>

            <div className="md:col-span-6 bg-surface-variant p-12 glass-panel flex flex-col justify-center gsap-fade-in">
              <h2 className="text-5xl font-serif italic font-extralight mb-8 leading-tight">El rugido ausente.</h2>
              <p className="text-lg font-body text-on-surface-variant leading-relaxed mb-8">
                Lo más inquietante del Catatumbo es el silencio. A menudo, las descargas ocurren a tal altitud que el trueno se disipa antes de tocar tierra, dejando solo un ballet eléctrico mudo que ilumina las canoas de los pescadores añú.
              </p>
              <div className="h-[1px] w-full bg-[rgba(132,149,136,0.2)]" />
              <div className="mt-8 flex justify-between font-mono text-xs">
                <span className="text-primary">ACTIVO</span>
                <span className="text-white/30">NIVEL DE ENERGÍA: 8.4 GW</span>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-8 gsap-fade-in">
              <div className="h-1/2 bg-[#282a30] p-6 border-t border-primary">
                <span className="material-symbols-outlined text-primary mb-4">air</span>
                <p className="font-mono text-xs mb-2">CORRIENTES TÉRMICAS</p>
                <p className="text-sm text-on-surface-variant">El choque de los vientos de la Cordillera de los Andes con el calor tropical del Caribe.</p>
              </div>
              <div className="h-1/2 bg-[#0c0e14] p-6 border border-[rgba(132,149,136,0.2)] flex items-center justify-center">
                <div className="text-center">
                  <p className="font-mono text-3xl text-primary font-bold">140-160</p>
                  <p className="font-mono text-[10px] text-white/40 uppercase">Días por Año</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 px-12 border-t border-[rgba(132,149,136,0.2)] gsap-fade-in">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square border border-[rgba(132,149,136,0.2)] p-2">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSMyeXGuGXtju0jj3OPlPSw1IhAaEfHYQryJPEi_4bBHagn68q6wXcVEfDlkSQ8eqWhDdfPjKfcC6vHQzj4oP1UnHIMWpP7lKo46hKNgv9cVR9gyoscF6kK3Fz1aBAJ96JoeKeRO_Ql6DVWLW0C3_b_USbjmbn54Ce0hr0ayP7J4ExJRHy9dj5JU9c7K91ye8a9sPAve8OHM-pleQGUMDbdgeO88NwRyunzzCH1208y5KUC2C_UDUys5y1FctKRNuOHGxwl08bE-I"
                  alt="Map of Lake Maracaibo topography"
                  className="w-full h-full object-cover opacity-40 grayscale"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary animate-pulse" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-6xl font-headline font-extralight tracking-widest text-primary uppercase">Ubicación</h2>
              <p className="text-2xl font-body text-on-surface">ZULIA, VENEZUELA</p>
              <p className="text-on-surface-variant font-light text-lg">
                El epicentro se encuentra sobre el pantano formado en el punto donde el río Catatumbo desemboca en el lago de Maracaibo. Este ecosistema único captura los gases metanos de los pantanos, alimentando el ciclo eléctrico.
              </p>
              <button className="px-12 py-4 bg-primary text-on-primary font-body font-bold text-sm tracking-widest hover:brightness-110 transition-all">
                DESCARGAR COORDENADAS
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
