import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"
import { Link } from 'react-router-dom';

export const ItemListContainer = ({ products }) => {
    // Verifica si products es un array, si no, conviértelo en un array vacío
    const productList = Array.isArray(products) ? products : [];

    return (
        <div className='cardsContainer'>
            {productList.map((product) => (
                <Card key={product.id} style={{ width: '18rem' }}>
                    <Link to={`/item/${product.id}`}>
                        <Card.Img variant="top" src={product.thumbnail} />
                    </Link>
                    <Card.Body className='cards'>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};


