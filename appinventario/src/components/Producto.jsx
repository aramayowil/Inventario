import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import './Producto.css'

function Producto({ producto }) {
    return (
        <Card>
            <Card.Img variant="top" src={`/productos/${producto.imagen}`} />
            <Card.Body>
                <Card.Title>{producto.nombre} (${producto.precio.toFixed(2)})</Card.Title>
                <Card.Text>
                    {producto.stock} Kg en stock
                </Card.Text>
                <Button variant="success">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default Producto