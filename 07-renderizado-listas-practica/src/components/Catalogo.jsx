import { useState } from "react";

function Catalogo() {
  const peliculas = [
    {
      id: 1,
      titulo: "La Matrix",
      genero: "ciencia-ficcion",
      año: 1999,
      rating: 8.7,
    },
    {
      id: 2,
      titulo: "Alien",
      genero: "ciencia-ficcion",
      año: 1979,
      rating: 8.5,
    },
    {
      id: 3,
      titulo: "Star Wars: La venganza de los Sith",
      genero: "aventura",
      año: 2005,
      rating: 7.7,
    },
    {
      id: 4,
      titulo: "Esperando la Carroza",
      genero: "comedia",
      año: 1985,
      rating: 8.0,
    },
    {
      id: 5,
      titulo: "El secreto de sus Ojos",
      genero: "suspenso",
      año: 2009,
      rating: 8.2,
    },
    { id: 6, titulo: "Mad Max", genero: "accion", año: 1979, rating: 6.8 },
    { id: 7, titulo: "Melancolía", genero: "drama", año: 2011, rating: 7.1 },
    {
      id: 8,
      titulo: "Cuando acecha la maldad",
      genero: "terror",
      año: 2023,
      rating: 6.9,
    },
    {
      id: 9,
      titulo: "El viaje de Chihiro",
      genero: "animacion",
      año: 2001,
      rating: 8.6,
    },
    {
      id: 10,
      titulo: "Viaje a la Luna",
      genero: "fantasia",
      año: 1902,
      rating: 8.1,
    },
    { id: 11, titulo: "Belén", genero: "drama", año: 2025, rating: 7.0 },
    {
      id: 12,
      titulo: "Si pudiera, te patearía",
      genero: "drama",
      año: 2025,
      rating: 6.6,
    },
  ];

  const todosGeneros = [...peliculas].map((p) => p.genero);

  const generosSinRepe = [...new Set(todosGeneros)];

  const [genero, setGenero] = useState("todos");
  const [busqueda, setBusqueda] = useState("");
  const [ratingMin, setRatingMin] = useState(0);
  const [orden, setOrden] = useState("titulo");

  const filtradas = peliculas.filter((p) => {
    return (
      (genero === "todos" ? true : p.genero == genero) &&
      (busqueda === ""
        ? true
        : p.titulo.toLowerCase().includes(busqueda.toLowerCase())) &&
      p.rating >= ratingMin
    );
  });

  const ordenadas = [...filtradas].sort((a, b) => {
    return (
    orden === "titulo"
      ? a.titulo.localeCompare(b.titulo, "es", { sensitivity: "base" })
      : orden === "año"
        ? a.año - b.año
        : b.rating - a.rating
    )
  });

  return (
    <>
      <section className="catalogo">
        <div className="catalogo-filtros">
          <div className="catalogo-filtros_grupo">
            <label htmlFor="genero">Filtrar por género</label>
            <select
              name="genero"
              id="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="todos">Elija un género</option>
              {generosSinRepe.map((g) => (
                <option value={g} key={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          <div className="catalogo-filtros_grupo">
            <label htmlFor="busqueda">Buscar por título</label>
            <input
              type="text"
              name="busqueda"
              id="busqueda"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="catalogo-filtros_grupo">
            <label htmlFor="rating">Filtrar por rating mínimo</label>
            <div className="catalogo-filtros_rating">
              <input
                type="range"
                name="rating"
                id="rating"
                value={ratingMin}
                min={0}
                max={10}
                step={0.1}
                onChange={(e) => setRatingMin(e.target.value)}
              />
              <output
                htmlFor="rating"
                className="catalogo-filtros_rating-valor"
              >
                {ratingMin}
              </output>
            </div>
          </div>
          <div className="catalogo-filtros_grupo">
            <label htmlFor="orden">Ordenar</label>
            <select
              name="orden"
              id="orden"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="titulo">Título</option>
              <option value="año">Año</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        <ul className="catalogo-lista">
          {ordenadas.map((pelicula) => (
            <li className="catalogo-item" key={pelicula.id}>
              <p className="catalogo-item_titulo">{pelicula.titulo}</p>
              <p className="catalogo-item_anio">{pelicula.año}</p>
              <p className="catalogo-item_genero">{pelicula.genero}</p>
              <p className="catalogo-item_rating">{pelicula.rating}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Catalogo;
