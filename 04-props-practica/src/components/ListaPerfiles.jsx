import Perfil from "./Perfil";
import Tarjeta from "./Tarjeta";

function ListaPerfiles() {
    return (
        <div className="lista-perfiles">
            <h1>Galería de perfiles</h1>
            <Tarjeta>
                <Perfil nombre="Maria Gonzalez" edad={28} profesion="Ingeniera" />
            </Tarjeta>
            <Tarjeta>
                <Perfil nombre="Pedro Lopez" edad={40} profesion="Chef" disponible={false} />
            </Tarjeta>
            <Tarjeta>
                <Perfil nombre="Lucia Gomez" edad={35} profesion="Contadora" disponible={false} />
            </Tarjeta>
            <Tarjeta>
                <Perfil nombre="Martin Nuñez" edad={25} profesion="Diseñador" />
            </Tarjeta>
            <Tarjeta>
                <Perfil nombre="Martina García" edad={28} profesion="Ingeniera" />
            </Tarjeta>
            <Tarjeta>
                <Perfil nombre="Carlos López" edad={35} profesion="Diseñador" disponible={false} />
            </Tarjeta>
            <Tarjeta>
                <Perfil nombre="Ana Martínez" edad={24} profesion="Programadora" />
            </Tarjeta>
        </div>
    )
}

export default ListaPerfiles;