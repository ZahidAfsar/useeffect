import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// We are passing in our props as a parameter in our card component function
function CardComponent(props) {

useEffect(() => {
    console.log(props);
})


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.digiImg} />
      <Card.Body>
        <Card.Title>{props.digiName}</Card.Title>
        <Card.Text>
          {props.digiLevel}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;