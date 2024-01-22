import React from "react";


interface Props {
  trys: number;
}

const Trys:React.FC<Props> = props => {
  return (
    <div>
      <span>{props.trys}</span>
    </div>
  );
};

export default Trys;