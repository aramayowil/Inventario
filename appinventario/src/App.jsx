import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Producto from './components/Producto.jsx'
import config from './config.js';
import productos from './json.js';
import './App.css'

// const recuperarProductos = async () => {
//   const data = await fetch(`${config.BASE_API}/products`)
//   const jsonData = await data.json()
//   return jsonData.data;
// }
// const productos = await recuperarProductos()
function App() {
  const [productosEnCarrito, setProductosEnCarrito] = useState(0)

  const comprar = () => {
    setProductosEnCarrito(valActual => valActual + 1)
  }

  return (
    <>
      <header>
        <Container fluid>
          <Row className='m-3'>
            <a href="#" target='_blank'>
              <img src="/public/rolling_logo.png" alt="Rolling_logo" />
            </a>
          </Row>
        </Container>
      </header>
      <main>
        <Container fluid>
          <Row>
            <h1>Productos en carrito: {productosEnCarrito}</h1>
          </Row>
          <Row>
            {productos.map((item) => {
              return <Col lg={3} md={4} sm={6} xs={12} key={item.codigo} style={{ marginBottom: '1em' }}>
                <Producto producto={item} />
              </Col>
            })}
            <Button variant="success" onClick={() => { comprar() }}>Comprar</Button>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App
