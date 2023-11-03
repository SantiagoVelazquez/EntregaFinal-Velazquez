import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidgetComponent = () => {
    const iconeStyle = {
        paddingRight: "10px",
    }

    return(
        <div>
            <FontAwesomeIcon style={iconeStyle} icon={faShoppingCart} />
            <span>1</span>
        </div>
    )
}

export default CartWidgetComponent