import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const {categoriaId} = useParams()

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb,'products');
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
  }, [categoriaId]);

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
}
