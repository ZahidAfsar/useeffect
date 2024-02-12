import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

// useEffect hook that updates the state of name by calling the function setName
const [name, setName] = useState('Jacoozi');

const handleClick = () => {
  setName('Evil Jacoozi');
}

// every time the componenent state is rendered the useEffect Hook is ran
// This hook runs as soon as the component is rendered
useEffect(() => {

  console.log("useEffect ran");
  
},[name]) //Dependancy array - what ever in our depenancy array will effect whehter or ot our useEffect will run

  return (
   <>
   {/* Calling our state variable in the JSX using { } */}
   <h1>{name}</h1>
   <Button variant="dark" onClick={() => handleClick()} >Dark</Button>
   </>
  );
}

export default App;
