import Footer from '../components/Footer';

export default function Archivo() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary overflow-x-hidden min-h-screen">
      <main className="pt-32 pb-24 px-12 min-h-screen relative">
        <div className="absolute inset-0 z-[-1] opacity-30" style={{ background: 'linear-gradient(180deg, rgba(0,255,163,0.05) 0%, transparent 100%)' }} />

        {/* Header */}
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 gsap-fade-in">
          <div className="max-w-4xl">
            <p className="font-mono text-primary text-[10px] tracking-widest mb-4 uppercase">CATÁLOGO DE INVESTIGACIÓN // NIVEL 4</p>
            <h1 className="text-6xl md:text-8xl font-headline font-light tracking-[0.1em] text-on-surface leading-tight uppercase">ARCHIVO DE FENÓMENOS</h1>
          </div>
          <div className="font-mono text-[11px] text-on-surface/40 text-right leading-relaxed hidden md:block">
            001 // ATMOSPHERIC DISTURBANCE<br />
            002 // ELECTROMAGNETIC VOID<br />
            003 // SPECTRAL AURORA
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Hero Card */}
          <div className="md:col-span-8 group relative overflow-hidden bg-[#0c0e14] gsap-fade-in min-h-[500px]">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                alt="Severe supercell cloud structure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9VL-GnJIPOod8i6e4B7lDgQMK3Itn8sKtpJVsrgPkOcHPx_XeHDa0mjHL9cMEnzx5wXZzbxOLC0UdDRbC5bMrwcy8D_NRo8EPMLFK7w-8JseRL92oBfqwrQhJd6qltoAwchg5XL_2urr4EVu3qI6BhdFMTDkg6JkDv-3UEd7zXWYg57_hfg-ti-AmFF6TBwFImr7BuoQSQ_aIxH7st51XXTVVitCdvrXr04YUOIUfdOi1EOOiFE7KpjROp8cdYnK6CMUr_7-aIlY"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-10 w-full flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="font-mono text-primary text-[10px] block mb-2">[ ANOMALÍA_ALPHA-09 ]</span>
                <h2 className="font-serif text-4xl font-light mb-4">Ciclón de Ionización Baja</h2>
                <p className="text-on-surface/70 font-body max-w-md leading-relaxed text-sm">Vórtice detectado a 32,000 pies. Muestra patrones de rotación no convencionales y emisión de plasma frío en el núcleo.</p>
              </div>
              <div className="glass-panel border border-[rgba(132,149,136,0.2)] p-6 flex flex-col gap-4 min-w-[200px]">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] text-on-surface/40">ALTITUD</span>
                  <span className="font-mono text-primary text-sm">9,754M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] text-on-surface/40">DENSIDAD</span>
                  <span className="font-mono text-primary text-sm">98.4%</span>
                </div>
                <div className="w-full bg-[rgba(132,149,136,0.2)] h-[1px]" />
                <button className="w-full bg-primary text-on-primary font-body font-bold py-3 text-xs tracking-tighter hover:brightness-110 active:scale-95 transition-all uppercase">
                  Analizar Telemetría
                </button>
              </div>
            </div>
          </div>

          {/* Side Card */}
          <div className="md:col-span-4 group flex flex-col justify-between border-l border-[rgba(132,149,136,0.2)] pl-12 gsap-fade-in">
            <div>
              <div className="aspect-square w-full mb-8 overflow-hidden bg-[#0c0e14]">
                <img
                  alt="Star trails and atmospheric nebulae"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrVjQkMWRaabANDKtngH8ECUZ6sZI9L1pxO2qDpnFXSU-f4Y_1Ez4LJ-YYSpT7rLe836ikgmQ8TftPHQH1-mP0fwgnmyRZ3A0oHWbBQ__VTf7Qw6W9V5r7CFCFXE3OgSa-X2oZcNFzWkEa0puxDrwfcvtU8M_duXn9D_GamxOzDdchF4iM89O4ye72hHV6cLXo76sHP9R5emXlpq7fl2puhCpqPxo7OfCf8XV5bQD5u02XOMZAUFujgCzdy8HQCYJvyjcAYiJQ3Bg"
                />
              </div>
              <span className="font-mono text-primary text-[10px] block mb-2">[ EVENTO_NEBULA ]</span>
              <h3 className="font-serif text-2xl font-light mb-4">Velo de Radiación Estática</h3>
              <p className="text-on-surface/60 font-body text-xs leading-relaxed mb-6">Interferencia persistente capturada por el sensor Sentinel-4 durante el tránsito del solsticio. Origen desconocido.</p>
            </div>
            <div className="font-mono text-[10px] space-y-2">
              <div className="flex justify-between border-b border-[rgba(132,149,136,0.2)] pb-2">
                <span className="text-on-surface/40">COORDENADAS</span><span>42.36°N, 71.05°W</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(132,149,136,0.2)] pb-2">
                <span className="text-on-surface/40">MAGNITUD</span><span>0.88λ</span>
              </div>
            </div>
          </div>

          {/* Aurora Card */}
          <div className="md:col-span-5 group relative overflow-hidden bg-[#0c0e14] mt-12 gsap-fade-in">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                alt="Mountains against glowing green aurora"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9jS0fEPKmuBg-4r-qUzMIsRI0J2ja-wTY32REOLYU4PORvUiDoqW3Is0ri3RUEsIeWQ3v6s2JFVB_N-atTrdxT0Wjq9at2LmR_vgwKyqj9xh4Is8EtaZS9hvZLCalSatfRInl0PzG2jpqlY_tCZQgESgh2lGj9OXvrOBCVGkUQwnlRZHRpnwiaFuftc-P82RVjDzbEaHcj58NdPoIpmYZqfUYuhyrN0LgBEmWQY5Xb7rykGAVV8CCS4MO2dP103KucUgYQkoeTw8"
              />
            </div>
            <div className="absolute top-0 right-0 p-8">
              <span className="material-symbols-outlined text-primary text-3xl font-light" style={{ fontVariationSettings: "'FILL' 0" }}>monitor_heart</span>
            </div>
            <div className="p-8 border-x border-b border-[rgba(132,149,136,0.2)]">
              <span className="font-mono text-primary text-[10px] block mb-2">[ SEÑAL_POLAR ]</span>
              <h3 className="font-serif text-3xl font-light mb-4">Fluctuación Borealis</h3>
              <p className="text-on-surface/60 font-body text-sm leading-relaxed">Desviación del espectro visible detectada en latitudes bajas. La firma térmica indica una inversión de polaridad momentánea.</p>
            </div>
          </div>

          {/* Metrics Cluster */}
          <div className="md:col-span-7 mt-12 flex flex-col gap-12 gsap-fade-in">
            <div className="grid grid-cols-2 gap-12">
              <div className="glass-panel p-10 border border-[rgba(132,149,136,0.2)] relative cursor-pointer hover:bg-surface-variant transition-colors group">
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-primary" />
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-primary" />
                <h4 className="font-mono text-primary text-[10px] mb-8 tracking-[0.2em] uppercase">Métricas de Vacío</h4>
                <div className="space-y-6">
                  {[
                    { label: 'PRESIÓN ATMOSFÉRICA', val: '840 HPA', pct: 66 },
                    { label: 'SATURACIÓN DE OZONO', val: '12%', pct: 20 },
                  ].map(({ label, val, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between font-mono text-[9px] text-on-surface/40 mb-2">
                        <span>{label}</span><span>{val}</span>
                      </div>
                      <div className="w-full h-[2px] bg-[rgba(132,149,136,0.2)]">
                        <div className="bg-primary h-full shadow-[0_0_8px_rgba(0,255,163,0.5)] group-hover:opacity-100 transition-all" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-serif text-xl italic text-on-surface/40 leading-relaxed mb-6">"Los datos sugieren que el cielo no es una barrera, sino una membrana reactiva ante nuestra mera observación."</p>
                <span className="font-mono text-[9px] text-primary">— DR. ELARA VANCE, ARCHIVO SENTINEL</span>
              </div>
            </div>
            <div className="flex-grow group relative overflow-hidden min-h-[300px]">
              <img
                alt="High altitude light refraction"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx1Tpo-kdXAr1VkPEk4BLDZ9pCHqagNxxe_dC0xw5uZkIUONtQq2of-eA9HjkTXMVdotBRxo4NXG4iI4wUoc05sdIZrD4pXsThb1bRZ1c4q_KCopc1M3Skf-843nANZtdCNgq8Q3rhmkpzkUS9kI89aqNittxAxx6dQrI8tu52uoPwbzCXa43uxtSGuKTSybA2R_OCCYhwkR1fbzdFECNI0-oxtSVVzw-OZTT945y1lGTdP8xQu1zQzqNy1N3DDBfvbzpt5iGeHkU"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <h3 className="font-headline font-extralight text-5xl tracking-[0.3em] uppercase opacity-20 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500 text-white">Invisibilidad</h3>
                  <p className="font-mono text-xs text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Detección de espectro infra-rojo bloqueada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="h-48" />
        <div className="flex flex-col items-center gap-12 gsap-fade-in">
          <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent" />
          <button className="font-mono text-[10px] tracking-[0.4em] text-on-surface/40 hover:text-primary transition-colors flex flex-col items-center gap-4 cursor-pointer">
            DESPLEGAR MÁS ARCHIVOS
            <span className="material-symbols-outlined hover:translate-y-1 transition-transform">expand_more</span>
          </button>
        </div>
      </main>


      <Footer />
    </div>
  );
}
