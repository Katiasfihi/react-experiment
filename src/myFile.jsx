import React from "react";
import MyConst from "./myNewFile";

const Myfiles = ({ name, city }) => {
  return (
    <div className="style">
      <h3 className="h3"> Hello </h3>
      <p className="h3"> My name is {name} </p>
      <MyConst city={city} />
    </div>
  );
};

export default Myfiles;
