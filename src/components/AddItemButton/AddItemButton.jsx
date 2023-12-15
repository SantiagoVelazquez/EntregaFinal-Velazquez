import React from 'react'
import { CartContext } from '../../context'

export const AddItemButton = ({label = "agregar al carrito", quantity, handleResetQuantity}) => {

    const { itemCount, setItemCount } = React.useContext(CartContext);
    const handleAddCart = () => {
        setItemCount(itemCount + quantity);
        handleResetQuantity();
    }
  
    return (
    <button onClick={handleAddCart} style={{width:"270px", margin: "10px 0", borderRadius: "4px", backgroundColor:"darksalmon", color:"white"}}>{label} </button>
  )
}
