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
        {/* digiEvolution is being passed down as an array */}
        {/* "?" is a ternary is a if else statement written in a different syntax */}
        {/* adding ? checks if props.digiEvolutions exists (is defined) if it is we can map through our data if not we display no evolutions */}
        {props.digiEvolutions ? props.digiEvolutions.map(evo => {
          // For Every index inside of our digiEvolution array we perform this arrow function
          return(
            <Card.Text key={evo.name} >
              {evo.name}
            </Card.Text>
          )
        }) : <Card.Text> No evolutions found </Card.Text> } 
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;