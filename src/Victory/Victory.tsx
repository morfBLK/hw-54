import {SquareType} from "../types";
import React from "react";
import ResetButton from "../ResetButton/ResetButton";
import './Victory.css';

interface Props {
  square: SquareType[];
  onClickBtn: React.MouseEventHandler;
}

const Victory: React.FC<Props> = (props) => {
  let className = 'victory-j';

  props.square.map((item) => {
    if (item.hasItem && item.clicked) {
      return className = 'victory-k';
    }
    return props.square;
  });

  return (
    <div className={className}>
      <div className='win-box'>
        <span className='win'>Winner</span>
        <ResetButton onClickBtn={props.onClickBtn}/>
      </div>
    </div>
  );
};

export default Victory;