import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const BotonCarrito = ({total}) => {
    return (
        <Link to={"/cart"} className="btn btn-warning position-relative">
            <img src="/images/cart.svg" alt="Carrito" width="32" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
        </Link>
    )
}

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() > 0 ? <BotonCarrito total={cartTotal()} />  : "";
}

export default CartWidget;