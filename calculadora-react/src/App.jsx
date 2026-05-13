import { useState } from "react";

function App() {

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  // =====================================
  // FUNCIONES
  // =====================================

  function sumar(a, b) {
    return a + b;
  }

  function restar(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }

  function dividir(a, b) {

    if (b === 0) {
      return "No se puede dividir por cero";
    }

    return a / b;
  }

  // =====================================
  // EVENTOS
  // =====================================

  function handleSuma() {
    setResultado(sumar(Number(numero1), Number(numero2)));
  }

  function handleResta() {
    setResultado(restar(Number(numero1), Number(numero2)));
  }

  function handleMultiplicacion() {
    setResultado(multiplicar(Number(numero1), Number(numero2)));
  }

  function handleDivision() {
    setResultado(dividir(Number(numero1), Number(numero2)));
  }

  function limpiar() {
    setNumero1("");
    setNumero2("");
    setResultado("");
  }

  return (
    <div
      style={{
        padding: "40px",
        width: "300px",
        margin: "50px auto",
        border: "2px solid black",
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
        textAlign: "center"
      }}
    >

      <h1>Calculadora React</h1>

      <input
        type="number"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "90%"
        }}
      />

      <br />

      <input
        type="number"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "90%"
        }}
      />

      <br />

      <button onClick={handleSuma}>
        Sumar
      </button>

      <button onClick={handleResta}>
        Restar
      </button>

      <button onClick={handleMultiplicacion}>
        Multiplicar
      </button>

      <button onClick={handleDivision}>
        Dividir
      </button>

      <button onClick={limpiar}>
        Limpiar
      </button>

      <h2>Resultado: {resultado}</h2>

    </div>
  );
}

export default App;
function limpiar() {
  setNumero1("");
  setNumero2("");
  setResultado("");
}