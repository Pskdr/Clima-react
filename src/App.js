import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'
import Clima from './components/Clima'

function App() {

  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  });


  const [ consultar, guardarConsultar ] = useState(false)
  const [ resultado, guardarResultado ] = useState({})
  const [ error, guardarError ] = useState(false)

  const { ciudad, pais} = busqueda
  
  useEffect(() => {
    const consultarApi = async () => {
      if(consultar){
        const apiKey = '17d60a4a509a94fcaa7a83a15a3a2db4'
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        guardarConsultar(false);

        //detectar un error

        if(resultado.cod ==='404'){
          guardarError(true)
        }else{
          guardarError(false)
        }
      }
    }

    consultarApi();
    // eslint-disable-next-line
  },[consultar]);


  let componente;
  if(error){
    componente = <Error mensaje='No hay resultados' />
  }else{
    componente= <Clima resultado={resultado} />
  }



  return (
    <Fragment>
        <Header
        titulo='Clima React App'
        />


        <div className='contenedor-form'>
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Formulario
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar = {guardarConsultar}
                />
              </div>
              <div className="col m6 s12">
                {componente}
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
