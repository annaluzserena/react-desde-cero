import { useState } from "react";

function Clima() {
  const ciudades = {
    "buenos aires": { temp: 28, humedad: 65, desc: "Soleado" },
    cordoba: { temp: 24, humedad: 70, desc: "Nublado" },
    mendoza: { temp: 32, humedad: 30, desc: "Despejado" },
    bariloche: { temp: 8, humedad: 80, desc: "Lluvioso" },
    usuahia: { temp: 2, humedad: 85, desc: "Nieve" },
  };

  const [ciudad, setCiudad] = useState("");
  const [resultado, setResultado] = useState(null);
  const [estado, setEstado] = useState("idle");
  const [historial, setHistorial] = useState([]);

  const buscarClima = () => {
    if (!ciudad.trim()) {
      setEstado("empty");
      return;
    }

    setEstado("loading");

    setTimeout(() => {
      const datos = ciudades[ciudad.toLowerCase().trim()];
      setHistorial([...historial, ciudad]);
      if (datos) {
        setResultado({ nombre: ciudad, ...datos });
        setEstado("success");
      } else {
        setEstado("error");
      }
    }, 1500);
  };

  let mensaje;

  if (estado === "idle") {
    mensaje = "Todavía no se ha realizado ninguna búsqueda. Ingrese una ciudad para comenzar."
  } else if (estado === "empty") {
    mensaje = "No se ha ingresado ninguna ciudad."
  } else if (estado === "error") {
    mensaje = "La ciudad buscada no existe."
  } else {
    mensaje = null
  }

  let icono;

  if (estado === "success") {
    if (resultado.desc === "Soleado") {
        icono = '☀️'
    } else if (resultado.desc === "Nublado") {
        icono = '☁'
    } else if (resultado.desc === "Despejado") {
        icono = '🌤'
    } else if (resultado.desc === "Lluvioso") {
        icono = '🌧'
    } else {
        icono = '❄'
    }
  }

  if (estado === "loading") {
    return (
      <div className="clima">
        <p className="clima_info">
          Cargando información...
        </p>
      </div>
    );
  }

  let contador = 0;

  return (
    <div className="clima">
      <input
        type="text"
        id="ciudad"
        name="ciudad"
        placeholder="Buscar clima en..."
        value={ciudad}
        onChange={(e) => {
          setCiudad(e.target.value);
        }}
      />
      <button
        onClick={() => {
          buscarClima();
        }}
      >
        Buscar
      </button>

      {mensaje && <p className="clima_info">{mensaje}</p>}

      {estado === "success" && (
        <div className="clima_ciudad">
            <p className="clima_ciudad_nombre">{resultado.nombre.toUpperCase()}</p>
          <p className="clima_ciudad_temp">Temperatura: {resultado.temp}C</p>
          <p className="clima_ciudad_humedad">Humedad: {resultado.humedad}%</p>
          <p className="clima_ciudad_desc">Descripción: {resultado.desc} {icono}</p>
        </div>
      )}

      <div className="historial">
        <p>Historial de búsqueda</p>
        {historial.map((c) => (
            <p key={contador++} className="historial_ciudad">{c}</p>
        ))}
        <button onClick={() => setHistorial([])}>Borrar historial</button>
      </div>
    </div>
  );
}

export default Clima;
