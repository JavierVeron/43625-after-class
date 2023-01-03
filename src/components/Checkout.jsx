import { addDoc, doc, collection, getFirestore, writeBatch, getDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, clear, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email},
            items: cart.map(item => ({id:item.id, title:item.nombre, quantity:item.quantity, price:item.precio, price_total:item.quantity * item.precio})),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const batch = writeBatch(db);

            cart.forEach(item => {
                let producto = doc(db, "items", item.id);
                getDoc(producto).then((snapShot) => {
                    batch.update(producto, {stock:snapShot.data().stock - item.quantity});
                });
            });
            
            batch.commit();
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Teléfono:</label>
                            <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">                                
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-end">{item.quantity}</td>
                                    <td className="align-middle text-end">${item.quantity * item.precio}</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-end"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <Navigate to={"/thankyou/" + orderId} /> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;