import React from 'react';
import PropTypes from 'prop-types'

const Clima = ({resultado}) => {

    const { name, main} = resultado;
    
    if(!name) return null;
    
    //grados kelvin
    const kelvin = 273.15;

    return (
         <div className='card-panel white col s12'>
             <div className='black-text'>
                 <h2>El clima de {name} es:</h2>
                 <p className='temperatura'>
                     {(main.temp - kelvin).toFixed(2)} <span> &#x2103;</span>
                     
                 </p>
                 <p> Temperatura maxima
                     :
                     {(main.temp_max - kelvin).toFixed(2)} <span> &#x2103;</span>
                     
                 </p>
                 <p> Temperatura mínima:
                     {(main.temp_min - kelvin).toFixed(2)} <span> &#x2103;</span>
                     
                 </p>
                 
                 <p> La humedad es de:
                     {(main.humidity)} <span></span>
                     
                 </p>

             </div>
         </div>
    );
}
 

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;