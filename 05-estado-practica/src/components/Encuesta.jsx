import { useState } from "react";

function Encuesta() {
  const [paso, setPaso] = useState(0);
  const [respuestas, setRespuestas] = useState({});

  const totalPasos = 6;

  const pasar = (respuesta) => {
    setPaso(paso + 1);
    setRespuestas({ ...respuestas, [paso]: respuesta });
  };

  const volver = () => {
    setPaso(paso - 1);
  }

  const reiniciar = () => {
    setPaso(0);
    setRespuestas({});
  };

  return (
    <div
      className="encuesta"
      style={{
        "--progreso": `${(Math.min(paso, totalPasos) / totalPasos) * 100}%`,
      }}
    >
      <div className="encuesta_barra">
        <div className="encuesta_barra_fill"></div>
      </div>
      {paso === 0 && (
        <div className="encuesta_pregunta">
          <p>¿Te gusta programar?</p>
          <button className="encuesta_boton" onClick={() => pasar(true)}>
            Sí
          </button>
          <button className="encuesta_boton" onClick={() => pasar(false)}>
            No
          </button>
        </div>
      )}
      {paso === 1 && (
        <div className="encuesta_pregunta">
          <p>¿Usaste React antes?</p>
          <button className="encuesta_boton" onClick={() => pasar(true)}>
            Sí
          </button>
          <button className="encuesta_boton" onClick={() => pasar(false)}>
            No
          </button>
        </div>
      )}
      {paso === 2 && (
        <div className="encuesta_pregunta">
          <p>¿Entendiste cómo funciona useState?</p>
          <button className="encuesta_boton" onClick={() => pasar(true)}>
            Sí
          </button>
          <button className="encuesta_boton" onClick={() => pasar(false)}>
            No
          </button>
        </div>
      )}
      {paso === 3 && (
        <div className="encuesta_pregunta">
          <p>¿Hiciste los ejercicios anteriores?</p>
          <button className="encuesta_boton" onClick={() => pasar(true)}>
            Sí
          </button>
          <button className="encuesta_boton" onClick={() => pasar(false)}>
            No
          </button>
        </div>
      )}
      {paso === 4 && (
        <div className="encuesta_pregunta">
          <p>¿Te parece útil este curso?</p>
          <button className="encuesta_boton" onClick={() => pasar(true)}>
            Sí
          </button>
          <button className="encuesta_boton" onClick={() => pasar(false)}>
            No
          </button>
        </div>
      )}
      {paso === 5 && (
        <div className="encuesta_pregunta">
          <p>¿Recomendarías este curso a tus compañeros?</p>
          <button className="encuesta_boton" onClick={() => pasar(true)}>
            Sí
          </button>
          <button className="encuesta_boton" onClick={() => pasar(false)}>
            No
          </button>
        </div>
      )}
      {paso <= 5 && paso > 0 && (
        <button className="encuesta_boton volver" onClick={volver}>Volver</button>
      )}
      {paso > 5 && (
        <div className="respuestas">
          {Object.keys(respuestas).map((key) => (
            <p>
              Respuesta {key}: {respuestas[key] ? "Sí" : "No"}
            </p>
          ))}
          <button onClick={reiniciar}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default Encuesta;
