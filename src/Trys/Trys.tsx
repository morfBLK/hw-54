import React from "react";
import './Trys.css';
import ResetButton from "../ResetButton/ResetButton";


interface Props {
  trys: number;
  onClickBtn: React.MouseEventHandler;
}

const Trys: React.FC<Props> = props => {
  return (
    <div className='trys-btn'>
      <span> Number of tries: {props.trys}</span>
      <ResetButton onClickBtn={props.onClickBtn}/>
    </div>
  );
};

export default Trys;