import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount';


export const ItemListContainer = ({products}) => {
    return (
        <div className='cardsContainer'>
            {products.map((product) => {
                return(
            <Card key={product.id} style={{ width: '18rem' }}>
                <Link to={`/item/${product.id}`} >
                    <Card.Img variant="top" src={product.thumbnail} />
                </Link>
                <Card.Body className='cards'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <ItemCount />
            </Card>
            );
            })}
            </div>    
        );
};

