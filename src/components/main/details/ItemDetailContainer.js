import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../../../db/customFetch";
import data from "../../../db/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [dat, setDat] = useState([])
  const {idProduct} = useParams()
  useEffect(() => {
    customFetch(data, 2000, data.find(product => product.id === parseInt(idProduct))) //para simular un fallo en la llamada debe cambiar el valor a !data
      .then((res)=>setDat(res))
      .catch((err)=>console.log(err))
  })
  return (
    <>
      <h1 className="main__title">Detalle del producto:</h1>
      <ItemDetail content={dat}/>
    </>
  )};
  export default ItemDetailContainer;