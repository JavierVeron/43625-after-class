import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { addDoc, collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    /* useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]); */

    // Proceso para Cargar Productos en nuestra Collection
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach((item) => {
            //addDoc(itemsCollection, {nombre:item.nombre, calorias:item.calorias, descripction:item.descripcion, imagen:item.imagen, precio:item.precio, stock:item.stock, categoria:item.categoria}); //Guardo el objeto con los campos que yo quiero
            addDoc(itemsCollection, item); //Guardo el objeto original
        });
    }, []); */

    // Consulta a nuestra Colección de Datos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        //const q = query(itemsCollection, where("precio", "<", 1000), limit(3)); //Consulta de Filtrado
        
        // En caso de tener ID, filtro los Productos por ID, sino traigo la collection completa
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ))
        });
    }, [id]);
    
    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;