import React from "react";
import smaller from "../../images/smaller.jpg";
import {kindpng1718046 as javascript} from "../../images/kindpng1718046.png";
import {logo2582748640 as html5} from "../../images/logo2582748640.png";
import {logo2582747640 as css3} from "../../images/logo2582747640.png";
import {nodejs736399 as nodejs} from "../../images/nodejs736399640.png"

const ImageCard = (props) => {
  return (
    <div>
      <img src={smaller} alt ="portrait" width ="300" height ="350"/>

      <img src={html5} alt = {props.name} width ="400" height ="450"/>
      
    </div>
  );
};

export default ImageCard;
