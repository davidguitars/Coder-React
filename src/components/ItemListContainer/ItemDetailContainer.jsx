import React, { useEffect, useState } from "react";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer  ()  {
  const [data, setData] = useState({})
  const [itemId] = useParams()
 
 
   useEffect(() => {
   const  querydb = getFirestore()
   const queryDoc = doc(querydb, 'products', '0DRoNabSFzgqoeY9s786')
   getDoc(queryDoc)
   .then(res => setData({id: res.data, ...res.data() }))
    
   }, [itemId]);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}



