import React, { useEffect, useState } from "react";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer  ()  {
  const [data, setData] = useState({})
 
 
 
   useEffect(() => {
   const  querydb = getFirestore()
   const queryDoc = doc(querydb, 'products', '0DRoNabSFzgqoeY9s786')
   getDoc(queryDoc)
   .then(res => setData({id: res.data, ...res.data() }))
    
   }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}



