//import logo from './logo.svg';
import logo from './logo.svg';
import './App.css';
import CompFuncional from './componentes/CompFuncionales/CompFunciones';
import EjemploProps from './componentes/EjemploProps/EjemploProps';
import EjemploEstado from './componentes/EjemploEstado/EjemploEstado';
import EjemploMap from './componentes/EjemploMap/EjemploMap';
import ListaEventosInteractiva from './componentes/EjmeploConKey/EjemploConKey';
import RenderizadoCondicional from './componentes/EjemploRenCondicional/renderizadoCondicional';
import FormSimple from './componentes/EjemplosFormularios/SoloUnCampo';
import FormVariosCampos from './componentes/EjemplosFormularios/VariosCampos';
import CicloVida from './componentes/CicloVida/CicloVida';
import Cronometro from './componentes/Cronometro/Cronometro';
import PostApi from './componentes/EjemploApi/EjemploApi';


function App() {
  
  //variables del contenido
  const nombre = "Jimmy";
  const profesion = "Ingeniero";
  const ciudad = "Alajuela";
  const imagen = logo;
  const mensaje = "Bienvenido a tu panel de admministracion";

  return (
    <>
    <EjemploProps titulo='Los cuentos de mi tía panchita' descripcion='Cuentos costarricenses'/>
    <div className='contenedor'>
      <img src={imagen} alt='Foto de perfil' className='imagen'/>
      <h1>Hola,{nombre}</h1>
      <h2>{profesion}</h2>
      <p>Ubicación: {ciudad}</p>
      <p>{mensaje}</p>
    </div>    
    <CompFuncional/>
    <EjemploProps titulo='Introducción a React' descripcion='El curso de React para comprender terminos y demas...'/>
    <EjemploEstado/>
    <br></br>
    <br></br>
    <EjemploMap></EjemploMap>
    <br></br>
    <ListaEventosInteractiva></ListaEventosInteractiva>
    <br></br>
    <RenderizadoCondicional></RenderizadoCondicional>
    <br></br>
    <br></br>
    <FormSimple></FormSimple>
    <br></br>
    <br></br>
    <FormVariosCampos></FormVariosCampos>
    <br></br>
    <br></br>
    <CicloVida></CicloVida>
    <br></br>
    <br></br>
    <Cronometro></Cronometro>
    <br></br>
    <br></br>
    <PostApi></PostApi>

    </>
  );
}

export default App;
