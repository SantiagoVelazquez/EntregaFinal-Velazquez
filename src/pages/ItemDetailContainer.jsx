import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSingleProduct } from '../hooks/useProducts'
import { ItemQuantitySelector, AddItemButton } from '../components'



export const ItemDetailContainer = () => {
    const {productId} = useParams()
    const {product, loading, error} = useSingleProduct("products", productId);

  return (
    <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.thumbnail} />
         <Card.Body>
             <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
        </Card.Body>
            <ItemQuantitySelector />
          
    </Card> 
  )
}
