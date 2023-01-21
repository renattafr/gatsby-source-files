import * as React from 'react'
import { Card, Button } from 'react-bootstrap';

function WineCard(props) {
    const { title, image, description, price, handleClick } = props;
    return (

        <Card style={{ width: '20rem', display: "flex", flexDirection: "column"  }}>
        <Card.Img variant="top" style={{height:'650px'}}src={image} />
        <Card.Body>
            <Card.Title style={{ marginTop: "auto" }}>{title}</Card.Title>
            <Card.Subtitle style={{ marginTop: "auto" }}>฿ {price}</Card.Subtitle>
                <Card.Text style={{ marginTop: "auto" }}>By {description}</Card.Text>
                <Button variant="success" style={{ marginTop: "auto"}} onClick={handleClick}>Add to Cart</Button>
             
        </Card.Body>
    </Card>
      
    
    )
}
export default WineCard