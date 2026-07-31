import { useState } from 'react'
import './App.css'

const initialForm = {
  name: '',
  email: '',
  password: '',
  age: '',
  birthDate: '',
  experience: 5,
  termsAccepted: false,
  languages: [],
  modality: 'presencial',
  country: 'mx',
  comments: '',
  photo: '',
  favoriteColor: '#6366f1',
}

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target

    if (name === 'languages') {
      setFormData((prev) => ({
        ...prev,
        languages: checked
          ? [...prev.languages, value]
          : prev.languages.filter((language) => language !== value),
      }))
      return
    }

    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedData({ ...formData })
  }

  return (
    <main className="app-shell">
      <section className="form-card">
        <h1>Registro de estudiante</h1>
        <p className="subtitle">
          Completa este formulario con todos los datos solicitados.
        </p>

        <form className="student-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ana López"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ana@correo.com"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="age">Edad</label>
            <input
              id="age"
              name="age"
              type="number"
              min="16"
              max="100"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="birthDate">Fecha de nacimiento</label>
            <input
              id="birthDate"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="experience">
              Nivel de experiencia: <span>{formData.experience}</span>
            </label>
            <input
              id="experience"
              name="experience"
              type="range"
              min="1"
              max="10"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          <div className="field checkbox-field">
            <label>
              <input
                name="termsAccepted"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              Acepto los términos y condiciones
            </label>
          </div>

          <fieldset className="field">
            <legend>Lenguajes que conoce</legend>
            <div className="choices-grid">
              {['JavaScript', 'Python', 'Java', 'C#', 'Go'].map((language) => (
                <label key={language} className="choice-inline">
                  <input
                    name="languages"
                    type="checkbox"
                    value={language}
                    checked={formData.languages.includes(language)}
                    onChange={handleChange}
                  />
                  {language}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="field">
            <legend>Modalidad</legend>
            <div className="choices-grid">
              <label className="choice-inline">
                <input
                  name="modality"
                  type="radio"
                  value="presencial"
                  checked={formData.modality === 'presencial'}
                  onChange={handleChange}
                />
                Presencial
              </label>
              <label className="choice-inline">
                <input
                  name="modality"
                  type="radio"
                  value="virtual"
                  checked={formData.modality === 'virtual'}
                  onChange={handleChange}
                />
                Virtual
              </label>
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="country">País</label>
            <select id="country" name="country" value={formData.country} onChange={handleChange}>
              <option value="mx">México</option>
              <option value="ar">Argentina</option>
              <option value="es">España</option>
              <option value="co">Colombia</option>
              <option value="cl">Chile</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="comments">Comentarios</label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Cuéntanos algo extra..."
            />
          </div>

          <div className="field">
            <label htmlFor="photo">Foto de perfil</label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={(event) => {
                setFormData((prev) => ({
                  ...prev,
                  photo: event.target.files?.[0]?.name || '',
                }))
              }}
            />
          </div>

          <div className="field color-field">
            <label htmlFor="favoriteColor">Color favorito</label>
            <input
              id="favoriteColor"
              name="favoriteColor"
              type="color"
              value={formData.favoriteColor}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Enviar registro</button>
        </form>
      </section>

      {submittedData && (
        <section className="summary-card">
          <h2>Vista previa del registro</h2>
          <ul>
            <li><strong>Nombre:</strong> {submittedData.name}</li>
            <li><strong>Correo:</strong> {submittedData.email}</li>
            <li><strong>Edad:</strong> {submittedData.age}</li>
            <li><strong>Fecha de nacimiento:</strong> {submittedData.birthDate}</li>
            <li><strong>Experiencia:</strong> {submittedData.experience}</li>
            <li><strong>Modalidad:</strong> {submittedData.modality}</li>
            <li><strong>País:</strong> {submittedData.country}</li>
            <li><strong>Lenguajes:</strong> {submittedData.languages.join(', ') || 'Ninguno'}</li>
            <li><strong>Comentarios:</strong> {submittedData.comments || 'Sin comentarios'}</li>
            <li><strong>Foto:</strong> {submittedData.photo || 'Sin archivo'}</li>
            <li><strong>Color favorito:</strong> {submittedData.favoriteColor}</li>
          </ul>
        </section>
      )}
    </main>
  )
}

export default App
