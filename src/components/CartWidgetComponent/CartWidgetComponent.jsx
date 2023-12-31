import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context';

export const CartWidgetComponent = () => {
    const {itemCount} = useContext(CartContext)
    
    const iconeStyle = {
        paddingRight: "10px",
    }

    return(
        <div>
            <FontAwesomeIcon style={iconeStyle} icon={faShoppingCart} />
            <span>{itemCount}</span>
        </div>
    )
};
