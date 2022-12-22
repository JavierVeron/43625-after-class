import { addDoc, doc, collection, getFirestore, updateDoc, writeBatch, getDocs } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
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
            const generatedOrder = doc(db, "orders", snapShot.id); //Selecciono la Orden a modificar
            updateDoc(generatedOrder, {total:order.total * 1.21}); //Actualiza la Orden Generada aplicando un 21% al valor total

            // Modificar un Documento en Batch
            /* const batch = writeBatch(db);
            const updatedOrder = doc(db, "orders", snapShot.id);
            const updatedOrder2 = doc(db, "orders", snapShot.id);
            batch.update(updatedOrder, {total:10000});
            batch.set(updatedOrder, {...order, price_friend:sumTotal()*0.9});
            batch.commit(); //Efectivizar la actualización o seteo de los campos y valores */

            // Modificar todas Ordenes con un valor especifico
            /* const ordersCollection = collection(db, "orders");
            const batch = writeBatch(db);
            getDocs(ordersCollection).then(results => {
                results.docs.map(item => {
                    let docModificado = doc(db, "orders", item.id);
                    batch.update(docModificado, {total:item.data()["total"] * 1.10});
                });

                batch.commit();
            }); */

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
                    {orderId !== "" ? <div className="alert alert-warning" role="alert">La Orden generada es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;