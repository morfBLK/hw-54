import {useState} from 'react';
import './App.css';
import {SquareType} from "./types";
import Square from "./Square/Square";
import ResetButton from "./ResetButton/ResetButton";
import Trys from "./Trys/Trys";

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
  const[trys, setTrys] = useState(0);

  const openSquare = (id: number) => {
    const itemsCopy = [...items];
    itemsCopy[id].clicked = true;
    setItems(itemsCopy);

    let trysCopy =trys;
    trysCopy++;
    setTrys(trysCopy);
  };

  const printSquare = items.map((item) => {
    return (
      <Square key={item.id} square={item} onClicked={openSquare}/>
    );
  });

  const resetButton = ()=> {
    setItems(createItems);
    const trysCopy = 0;
    setTrys(trysCopy);
  };

  return (
    <div className="App">
      <div className = 'square-box'>
        {printSquare}
      </div>
      <Trys trys={trys}/>
      <ResetButton onClickBtn={resetButton}/>
    </div>
  );
}

export default App;
