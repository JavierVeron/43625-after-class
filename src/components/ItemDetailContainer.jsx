import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id))); //Filtrar mi array de productos y devulevo 1 solo objeto
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);

    return (
        <div className="container my-5">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;