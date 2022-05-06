import { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';
import { DetalleInstrumento } from './DetalleInstrumento';
import { getInstrumentoJSON, getInstrumentoXID } from './FuncionesApi';
import { ItemInstrumento }  from './ItemInstrumento';
import { Navigation } from './Navigation';
import Instrumento from './Instrumento';

export const Home = () => {
    
    const [Instrumento, setInstrumento] = useState<Instrumento[]>([]);
      
      const getInstrumento = () => {
        let datos:Instrumento[] = getInstrumentoJSON();
        setInstrumento(datos);
      }
  
      useEffect(() => {
        getInstrumento();
      }, []);
  
      
      return (
          <>
          <Navigation></Navigation>
            <Container fluid="md" className='principal'>
                <Row>
                  {Instrumento.map((instrumento:Instrumento) =>
                    <ItemInstrumento key={instrumento.id} id={instrumento.id} 
                    nombre={instrumento.instrumento} cantidadVendida={instrumento.cantidadVendida}
                    imagen={instrumento.imagen} precio={instrumento.precio}></ItemInstrumento> 
                  )}
                </Row>
            </Container>
          </>
      )
  }
  
  