import {useState} from 'react';
import './App.css';
import {SquareType} from "./types";
import Trys from "./Trys/Trys";
import Deck from "./Deck/Deck";
import Victory from "./Victory/Victory";

const createItems = () => {
  const random = Math.floor(Math.random() * (36 + 1));
  const itemsDeck: SquareType[] = [];
  for (let i = 0; i < 36; i++) {
    const newItem: SquareType = {hasItem: false, clicked: false, id: i};

    if (i === random) {
      newItem.hasItem = true;
    }
    itemsDeck.push(newItem);
  }
  return itemsDeck;
};

function App() {

  const [items, setItems] = useState(createItems());
  const [trys, setTrys] = useState(0);

  const openSquare = (id: number) => {
    let trysCopy = trys;
    if (!items[id].clicked) {
      trysCopy++;
    }
    setTrys(trysCopy);

    const itemsCopy = [...items];
    itemsCopy[id].clicked = true;
    setItems(itemsCopy);
  };

  const resetButton = () => {
    setItems(createItems);
    const trysCopy = 0;
    setTrys(trysCopy);
  };

  return (
    <div className="App">
      <Deck squares={items} onClicked={openSquare}/>
      <Trys trys={trys} onClickBtn={resetButton}/>
      <Victory square={items} onClickBtn={resetButton}/>
    </div>
  );
}

export default App;
