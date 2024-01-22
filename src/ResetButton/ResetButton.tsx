import React from "react";
import './ResetButton.css';

interface Props {
  onClickBtn: React.MouseEventHandler;
}

const ResetButton:React.FC<Props> = props => {
  return (
    <div>
      <button className='reset-btn' onClick={props.onClickBtn}>Reset</button>
    </div>
  );
};

export default ResetButton;