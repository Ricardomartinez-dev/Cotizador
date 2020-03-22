import React,{useState} from 'react';
import Header from './components/Header'
import styled from '@emotion/styled'
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`




function App() {

  const [resumen, guardar_resumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardar_cargando] = useState(false);

  const {cotizacion,datos} = resumen; //FORMA 1 CON TERNARIOS

  return (
    <Contenedor>
      <Header 
        titulo='Cotizador de seguros'
      />

      <ContenedorFormulario>
        <Formulario 
          guardar_resumen={guardar_resumen}
          guardar_cargando={guardar_cargando}
        />
          {/* {datos ? <Resumen />: null} */}
          {cargando ?  <Spinner />: null}
         
          <Resumen 
            datos = {datos}
          />

          {!cargando 
          ? 
            <Resultado 
              cotizacion={cotizacion}
            /> : null
          }
          
      </ContenedorFormulario>
    </Contenedor> 
  );
}

export default App;
