// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  WhyUs.jsx  (¿Por qué elegirnos?)
//
//  INSTRUCCIONES:
//  1. Define el array "razones" con al menos 4 objetos.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Agrega una imagen en la columna izquierda.
//  3. Escribe 2 párrafos sobre la empresa.
//  4. Usa .map() para renderizar la lista de razones.
//
//  PISTAS:
//  - <div className="row align-items-center"> para las columnas
//  - className="list-unstyled" en <ul> quita los bullets
//  - Placeholder: https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec
// ============================================================

// 🛠️ PASO 1: Define tu array de razones
const razones = [
  {
    icono: '🏆',
    titulo: 'Certificación RETIE',
    descripcion: 'Nuestro equipo trabaja bajo los estándares RETIE para garantizar instalaciones seguras y confiables.',
  },
  {
    icono: '🛡️',
    titulo: 'Garantía de 1 año',
    descripcion: 'Ofrecemos garantía de 12 meses en mano de obra para que puedas confiar en cada proyecto realizado.',
  },
  {
    icono: '⚡',
    titulo: 'Respuesta en menos de 24 horas',
    descripcion: 'Atendemos solicitudes y emergencias rápidamente para minimizar tiempos de inactividad.',
  },
  {
    icono: '🔧',
    titulo: 'Materiales de primera calidad',
    descripcion: 'Usamos componentes certificados y marcas reconocidas para asegurar durabilidad y rendimiento.',
  },
  {
    icono: '📋',
    titulo: 'Presupuesto sin costo',
    descripcion: 'Realizamos cotizaciones claras y gratuitas para que tengas la mejor decisión sin compromisos.',
  },
  {
    icono: '🌙',
    titulo: 'Atención 24/7',
    descripcion: 'Contamos con servicio de emergencia disponible día y noche para resolver problemas eléctricos urgentes.',
  },
];

function WhyUs() {
  return (
    <section id="nosotros" className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Columna izquierda: imagen */}
          <div className="col-lg-5">
            <img
              src="https://placehold.co/500x400/1a1e2e/f5c518?text=VoltTec"
              alt="Técnicos de VoltTec trabajando"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Columna derecha: texto y razones */}
          <div className="col-lg-7">
            <h2 className="section-titulo mb-3">¿Por qué elegirnos?</h2>

            <p className="text-muted mb-4">
              VoltTec lleva más de 10 años ofreciendo servicios eléctricos en Bogotá, Medellín y Cali, atendiendo tanto hogares como comercios e industrias.
            </p>
            <p className="text-muted mb-4">
              Nuestro enfoque combina experiencia técnica, atención rápida y soluciones personalizadas para clientes residenciales, empresariales y proyectos de gran escala.
            </p>

            {/* 🛠️ PASO 2: Renderiza las razones con .map() */}
            <ul className="list-unstyled">
              {razones.map((razon, index) => (
                <li className="d-flex gap-3 mb-3" key={`${razon.titulo}-${index}`}>
                  <span style={{ fontSize: '1.5rem' }}>{razon.icono}</span>
                  <div>
                    <strong>{razon.titulo}</strong>
                    <p className="text-muted mb-0 small">{razon.descripcion}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;