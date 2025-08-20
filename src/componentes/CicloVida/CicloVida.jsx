import React, {useState, useEffect} from "react";

function CicloVida(){

    const [contador, setContador]= useState(0);

    //Montaje
    useEffect(()=> {
        console.log("El componentese montó")
    },[])
    


    //Actualización
    useEffect(()=> {
        console.log("El contador cambio", contador)
    },[contador])


    //Desmontaje -- Limpiez
    useEffect(()=> {
        const intervalo = setInterval(()=>{
            console.log("El intervalo esta corriendo...")
        },2000)
        
        return () => {
            clearInterval(intervalo)
            console.log("Intervalo eliminado")
        }    
    },[]);
    
    return(
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={()=> setContador(contador+1)}>Incrementar</button>
        </div>
    )

}

export default CicloVida;
