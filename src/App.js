import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React,{useState} from 'react';


function App() {

const [state,setState] = useState(0)

 function incre(){

  setState(prevState => prevState + 1);
 }


 function decre(){

  setState(prevState => prevState - 1);
 }


  return (
    <>
    <button onClick={incre}>Increment</button>
    <button onClick={decre}>Decrement</button>
    <p>Current State: {state}</p>
    
    </>
  );
}

export default App;
