import "./App.css";
import React from 'react';
import Card from './Components/Card';

function App() 
{
  const cardData = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="App">
      <h1 id="title">Pedal Plates</h1>
      <div className="container">
        {
          cardData.map((i) => <Card key={i} i={i} />)
        }
      </div>
    </div>
  );
}

export default App