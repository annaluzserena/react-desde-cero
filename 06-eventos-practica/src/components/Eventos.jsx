import { useState, useRef, useEffect } from "react";

function Eventos() {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  const [letra, setLetra] = useState(
    String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  );
  const cambiarLetra = () =>
    setLetra(String.fromCharCode(Math.floor(Math.random() * 26) + 97));

  const [tiempos, setTiempos] = useState({});
  const sumaTiempos = () => {
    let sum = 0;
    for (let key in tiempos) {
      sum += tiempos[key];
    }
    return sum;
  };

  const [tiempo, setTiempo] = useState({ viejo: Date.now(), nuevo: 0 });
  const tomarTiempo = () => {
    const ahora = Date.now();
    const t = ahora - tiempo.viejo;
    setTiempo({ viejo: ahora, nuevo: t });
    setTiempos({ ...tiempos, [Object.keys(tiempos).length]: t });
  };

  const letraCorrecta = () => {
    tomarTiempo();
    cambiarLetra();
    setPuntos(puntos + 1);
    setError(false);
  };

  const letraPresionada = (e) => {
    e.key === letra ? letraCorrecta() : setError(true);
    setIntentos(intentos + 1);
  };

  const reiniciar = () => {
    cambiarLetra;
    setTiempo({ viejo: Date.now(), nuevo: 0 });
    setTiempos({});
    setPuntos(0);
    setIntentos(0);
    setError(false);
  };

  const [puntos, setPuntos] = useState(0);
  const [error, setError] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const [sobre, setSobre] = useState(false);

  const promedio = sumaTiempos() / Object.keys(tiempos).length;

  return (
    <div
      className={`eventos ${sobre ? "hover" : ""}`}
      tabIndex={-1}
      ref={divRef}
      onKeyDown={letraPresionada}
      onMouseEnter={() => setSobre(true)}
      onMouseLeave={() => setSobre(false)}
    >
      <p className="letra">{letra}</p>
      <p>Tiempo de reacción: {tiempo.nuevo}ms</p>
      <p>
        Promedio de tiempo de reacción: {puntos > 0 ? promedio.toFixed(2) : "0"}
        ms
      </p>
      <p>Puntos: {puntos}</p>
      <p>Total intentos: {intentos}</p>
      <button onClick={reiniciar}>Reiniciar</button>
      {error && <p>Letra incorrecta. Intente de nuevo.</p>}
    </div>
  );
}

export default Eventos;
