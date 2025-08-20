import React, {useState} from "react";

export default function FormSimple(){
    const[nombre, setNombre]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault(); //evita que se regargue la página
        alert(`Hola ${nombre}`)

    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input 
                    type="text"
                    value={nombre} //valor viene del estado
                    //<input type="text" value="Jimmy" name="nombre" id="nombre"/>
                    //e.target.name ----nombre
                    //e.target.type ----text
                    //e.target.value ----Jimmy
                    onChange={(e)=> setNombre(e.target.value)} //actualización datos
                />
            </label>
            <button type="submit"> Enviar</button>
        </form>
    )

}