import {SquareType} from "../types";
import React from "react";
import Square from "../Square/Square";
import './Deck.css';

interface Props {
  squares: SquareType[];
  onClicked: (id: number) => void;
}

const Deck: React.FC<Props> = (props) => {
  const printSquare = props.squares.map((item) => {
    return (
      <Square key={item.id} square={item} onClicked={() => props.onClicked(item.id)}/>
    );
  });

  return (
    <div className='deck-square'>
      {printSquare}
    </div>
  );
};

export default Deck;