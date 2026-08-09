import { useState, useEffect } from "react";

function Cotizacion() {
  const criptos = [
    { id: "bitcoin", nombre: "Bitcoin", precio: 42000, cambio: 0 },
    { id: "ethereum", nombre: "Ethereum", precio: 2800, cambio: 0 },
    { id: "solana", nombre: "Solana", precio: 120, cambio: 0 },
    { id: "cardano", nombre: "Cardano", precio: 0.65, cambio: 0 },
    { id: "polkadot", nombre: "Polkadot", precio: 8.5, cambio: 0 },
  ];

  const [precios, setPrecios] = useState(criptos);
  const [historial, setHistorial] = useState(precios.map((p) => ({id: p.id, hist: [p.precio]})));
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    if (!activo) return;

    const generarPrecio = (precioBase, volatilidad = 0.1) => {
      const cambiar = (Math.random() * 2 - 1) * volatilidad;
      const precioNuevo = precioBase * (1 + cambiar);
      return [parseFloat(precioNuevo.toFixed(2)), parseFloat(cambiar.toFixed(4))];
    };

    const actualizar = setInterval(() => {
      const nuevos = [];
      const historialNuevo = [];

      precios.map((p) => {
        const nuevo = generarPrecio(p.precio);
        const nuevoPrecio = nuevo[0];
        const cambio = nuevo[1];
        nuevos.push({ ...p, precio: nuevoPrecio, cambio: cambio });

        const nuevoH = historial.find(h => h.id == p.id);
        if(nuevoH.hist.length == 10) {
            nuevoH.hist.shift();
        };
        nuevoH.hist.push(nuevoPrecio);
        historialNuevo.push(nuevoH);
      });
      
      setHistorial(historialNuevo);
      setPrecios(nuevos);
    }, 3000);

    return () => {
      clearInterval(actualizar);
    };
  }, [activo, precios, historial]);

  return (
    <>
      <div className="cotizacion">
        <h2 className="cotizacion-titulo">Cotización de criptomonedas</h2>
        {!activo && (<p className="pausa">PAUSADO</p>)}
        <ul className="cotizacion-lista">
          {precios.map((cripto) => (
            <li key={cripto.id} className="cotizacion-lista_item">
              <p>{cripto.nombre.toUpperCase()}</p> 
              <p>Precio: {cripto.precio}</p>
              <p className={cripto.cambio > 0 ? 'verde' : 'rojo'}>Cambio: {cripto.cambio}</p>
            </li>
          ))}
        </ul>
        <button className="toggle-activo" onClick={() => setActivo(!activo)}>
          {activo ? "Pausar" : "Reanudar"}
        </button>
        <ul className="historial">
            <h3>Historial</h3>
            {historial.map(h => (
                <li className="historial_item" key={h.id + 'h'}>
                    <p className="historial_item-nombre">{h.id.toUpperCase()}</p>
                    {h.hist.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </li>
            ))}     
        </ul>
      </div>
    </>
  );
}

export default Cotizacion;
