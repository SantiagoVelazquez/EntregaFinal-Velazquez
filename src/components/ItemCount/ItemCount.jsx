import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const ItemCount = () => {
    const {qtyItems, setQtyItems} = useContext(CartContext)

    const [count, setCount] = React.useState(qtyItems);

    const handleAddProduct = () => {
        setCount(count + 1);
        setQtyItems(count + 1);
    };
    const handleRemuveProduct = () => {
        setCount(count - 1);
        setQtyItems(count - 1);
    };
    return(
        <div>
            <button onClick={handleAddProduct}>+</button>
            <input type="number" value={count} />
            <button onClick={handleRemuveProduct}>-</button>
        </div>
    )
}
