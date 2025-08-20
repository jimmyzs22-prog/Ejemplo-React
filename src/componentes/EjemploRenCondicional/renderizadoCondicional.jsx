import React, {useState} from "react";

export default function RenderizadoCondicional() {

    const [usuario, setUsuario]=useState(null);
    const [cargando, setCargando]=useState(false);

    const iniciarSesion = ()=>{
        setCargando(true);
        setTimeout(()=>{
            setUsuario({nombre:"Jimmy"})
            setCargando(false);
        },1000)
    }

    const cerrarSesion=()=>{
        setUsuario(null);
    }    

    //ejemplo de condicional simple de if
    if(cargando){
        return <p>Cargando...</p>
    }

    return(
        <div>
            <h2>Estado de sesión</h2>

            {usuario ?(
                <div> 
                    <p>Bienvenido, {usuario.nombre}</p>
                    <button onClick={cerrarSesion} >Cerrar sesion</button>
                </div>
            ):(
                <div>
                    <p>No has iniciado sesion</p>
                    <button onClick={iniciarSesion} >Inicio sesión</button>
                </div>
            )}

            {usuario && <p>Recuerda revisar las notificaciones</p>}

        </div>
    )

}