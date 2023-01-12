import React from "react";
import { AwardStyle } from "../style/style";

const Award = ({ title, description }) => {
    return (
      <AwardStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
      </AwardStyle>
    );
  };
  
  export default Award;