import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const incrementarStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const addToCart = (quantity) => {
        if (counter <= itemStock) {
            setCounter(1);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }
    
    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div>
            <div className="row mb-3">
                <div className="col-md-6 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}> - </button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}> + </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-center">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-primary">Terminar Mi Compra</Link> : <button type="button" className="btn btn-outline-primary" onClick={() => { addToCart(counter) }}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;