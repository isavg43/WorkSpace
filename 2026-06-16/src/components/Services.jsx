// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Services.jsx
//
//  INSTRUCCIONES:
//  1. Define el array "servicios" con al menos 6 servicios.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Completa el JSX usando tarjetas Bootstrap (card).
//  3. Usa .map() para renderizar — NO copies el HTML 6 veces.
//
//  PISTAS:
//  - Usa <div className="row g-4"> para el grid
//  - Cada tarjeta va en <div className="col-md-6 col-lg-4">
//  - Clases Bootstrap útiles: card, card-body, card-title, card-text
// ============================================================

// 🛠️ PASO 1: Define aquí tu array de servicios
const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalaciones residenciales',
    descripcion: 'Realizamos instalaciones eléctricas completas para viviendas nuevas y remodelaciones, cumpliendo la normativa RETIE vigente.',
  },
  {
    icono: '🏢',
    titulo: 'Instalaciones comerciales e industriales',
    descripcion: 'Diseñamos y ejecutamos proyectos eléctricos para comercios, bodegas y plantas industriales con máxima seguridad y eficiencia.',
  },
  {
    icono: '🛠️',
    titulo: 'Mantenimiento preventivo y correctivo',
    descripcion: 'Ofrecemos servicios de mantenimiento eléctrico periódico y reparaciones rápidas para evitar fallas y prolongar la vida útil de su instalación.',
  },
  {
    icono: '🔌',
    titulo: 'Tableros eléctricos y breakers',
    descripcion: 'Instalamos y actualizamos tableros eléctricos, breakers y protecciones diferenciales para asegurar un suministro confiable.',
  },
  {
    icono: '💡',
    titulo: 'Iluminación LED y domótica',
    descripcion: 'Implementamos soluciones de iluminación LED eficientes y sistemas domóticos para controlar luz y energía de forma inteligente.',
  },
  {
    icono: '🔋',
    titulo: 'Plantas eléctricas y UPS',
    descripcion: 'Suministramos e instalamos plantas eléctricas y sistemas UPS para garantizar continuidad operativa ante cortes de energía.',
  },
  {
    icono: '🌐',
    titulo: 'Redes de voz y datos',
    descripcion: 'Diseñamos e instalamos redes estructuradas de voz y datos para mejorar la conectividad en oficinas y espacios comerciales.',
  },
  {
    icono: '🌍',
    titulo: 'Puestas a tierra',
    descripcion: 'Realizamos sistemas de puesta a tierra seguros y revisiones periódicas para proteger personas y equipos ante descargas eléctricas.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo">Nuestros Servicios</h2>
          <p className="section-subtitulo text-muted">
            VoltTec ofrece soluciones eléctricas completas para hogares, comercios e industrias, garantizando seguridad y eficiencia en cada proyecto.
          </p>
        </div>

        {/* 🛠️ PASO 2: Renderiza las tarjetas con servicios.map(...) */}
        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div className="col-md-6 col-lg-4" key={`${servicio.titulo}-${index}`}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div style={{ fontSize: '2.5rem' }}>{servicio.icono}</div>
                  <h5 className="card-title fw-bold mt-2">{servicio.titulo}</h5>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;