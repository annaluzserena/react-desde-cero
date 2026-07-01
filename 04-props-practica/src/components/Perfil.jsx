function Perfil({nombre, edad, profesion, disponible=true}) {
    return (
        <div className="perfil">
            <span>👤</span>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Profesión: {profesion}</p>
            <p>{disponible ? "Disponible" : "No disponible"}</p>
        </div>
    )
}

export default Perfil;