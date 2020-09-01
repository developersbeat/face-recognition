import React from "react";
import Tilt from "react-parallax-tilt";
import LogoPic from "../Logo/face-id.svg"
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="br2 shadow-2 logo" style={{ height: "150px",width: "150px" }}>
        <div className="pa3 level-10">
          <img style={{ paddingTop: "5px" }} src={LogoPic} alt="logo"/>
        </div>
      </Tilt>   
    </div>
  );
};

export default Logo;
