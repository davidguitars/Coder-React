import { useState } from "react";
import Swal from 'sweetalert2';



function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);


    const suma = () => {
        if (count < stock)  {
            setCount(count + 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: `Stock máximo ${stock}`,
            }
            )
        }
    }
    const resta = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className="count">
            <div>
                <button className="count__button" onClick={resta}>-</button>
                <span className="count__content">{count}</span>
                <button className="count__button" onClick={suma}>+</button>
            </div>
            <button className="boton2 btn btn-secondary" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}


export default ItemCount;
