import './App.css';
import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDigimon } from './data/DataServices.js';
import CardComponent from './components/CardComponent.js';
import digimonArray from './data/digimon.json';

function App() {

// useEffect hook that updates the state of name by calling the function setName
const [name, setName] = useState('Jacoozi');
const [digimon, setDigimon] = useState({});
const [digiArr, setDigiArr] = useState([]);

const handleClick = () => {
  setName('Evil Jacoozi');
}

// every time the componenent state is rendered the useEffect Hook is ran
// This hook runs as soon as the component is rendered
useEffect(() => {
  
  //useEffects cannot be async function but they can have async functions inside of them and call data

  const getData = async () => {
    let newInfo = await getDigimon();
    setDigiArr(digimonArray.Digimon);
    setDigimon(newInfo);
  }
  getData();

  console.log("useEffect ran");
  
},[name]) //Dependancy array - what ever in our dependency array will effect whether or not the useEffect will run

  return (
   <>
   {/* Calling our state variable in the JSX using { } */}
   <h1>{name}</h1>
   <Button variant="dark" onClick={() => handleClick()} >Dark</Button>
   {/* Props are a way to pass information from a parent component to a child component */}
   <CardComponent digiImg={digimon.img} digiName={digimon.name} digiLevel={digimon.level} />

    <Row>

    {/* We are mapping through our digiArr */}
    {digiArr.filter(digimon => digimon.type === 'Mammal').map(digimon => {
    // every digimon in our array needs a unique key 

    // map always needs a return
    return(
      // Without a key in our jsx return react will throw errors
    <Col key={digimon.id} >
      <CardComponent digiImg={digimon.img} digiName={digimon.name} digiLevel={digimon.level} digiEvolutions={digimon.evolutions} />
    </Col>
)
})}

    </Row>


   </>
  );
}

export default App;
