import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AddItemButton } from "../AddItemButton";


export const ItemQuantitySelector = () => {

    const [quantity, setQuantity] = React.useState(1);

    const handleAddProduct = () => {
        setQuantity(quantity + 1);
    };
    const handleRemuveProduct = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
   
    };
    const handleResetQuantity = () => {
        setQuantity(1);

    };
    return(
        <div>
            <button onClick={handleAddProduct} style={{borderRadius: "4px",backgroundColor:"darksalmon", color:"white",width: "27px"}}>+</button>
            <input type="number" value={quantity} style={{borderRadius: "4px", width:"220px"}} disabled/>
            <button onClick={handleRemuveProduct}  style={{borderRadius: "4px", backgroundColor:"darksalmon",color:"white", width: "27px"}}>-</button>
            <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity}/>
        </div>
    )
}
