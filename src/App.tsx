import React, { useState } from 'react';
import './App.css';
import List from "./components/List"
import AddToList from "./components/AddToList"

import brunaImg from "./img/bruna.jpg"
import beatrizImg from "./img/beatriz.jpg"
import pipocamg from "./img/pipoca.jpg"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
    name: "Bruna Gama",
    url: brunaImg,
    age: 28,
    note: "A gatinha da festa"
  },
  {
    name: "Beatriz",
    url: beatrizImg,
    age: 20,    
  },
  {
    name: "Pipoca",
    url: pipocamg,
    age: 5,
    note: "Gosta de brincar"
  }
])

  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
