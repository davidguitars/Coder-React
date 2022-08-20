import React, { useEffect, useState } from "react";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'


export default function ItemDetailContainer  ()  {
  const [data, setData] = useState({})
 const {itemId} = useParams()
 
 
   useEffect(() => {
   const  querydb = getFirestore()
   const queryDoc = doc(querydb, 'products', itemId)
   getDoc(queryDoc)
   .then(res => setData({id: res.data, ...res.data() }))
    
   }, [itemId]);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}



