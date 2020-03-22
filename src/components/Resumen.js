import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {primer_mayuscula} from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {

    //EXTRAER DE DATOS
    const {marca, year, plan} = datos;
    
    if(marca === '' || year === '' || plan ==='') return null;
    
    return ( 
        <ContenedorResumen>
        <h2>Resumen de cotización</h2>
        <ul>
            <li>Marca: {primer_mayuscula(marca)}</li>
            <li>Plan: {primer_mayuscula(plan)}</li>
            <li>Año: {year}</li>
        </ul>
        </ContenedorResumen>
     );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;