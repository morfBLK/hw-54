import React from "react";

interface Props {
  onClickBtn: React.MouseEventHandler;
}

const ResetButton:React.FC<Props> = props => {
  return (
    <div>
      <button onClick={props.onClickBtn}>Reset</button>
    </div>
  );
};

export default ResetButton;