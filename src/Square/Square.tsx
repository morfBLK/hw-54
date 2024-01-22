import {SquareType} from "../types";
import React from "react";
import './Square.css';

interface Props {
  square: SquareType;
  onClicked: (id: number) => void;
}

const Square: React.FC<Props> =(props)=> {
  let className = 'square-m';
  if (props.square.clicked){
    className = 'square-red';
  } else if (props.square.clicked) {
    className = 'square-dark';
  }
  return (
    <div className={className} onClick={() =>
      props.onClicked(props.square.id)}>
    </div>
  );
};

export default Square;