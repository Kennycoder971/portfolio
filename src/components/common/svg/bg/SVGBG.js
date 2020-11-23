import React from "react";
import Ellipse1 from "./Ellipse1";
import Ellipse2 from "./Ellipse2";
import Rect1 from "./Rect1";
import Rect2 from "./Rect2";
import Rect3 from "./Rect3";
import Rect4 from "./Rect4";
import Triangle from "./Triangle";
import Vector from "./Vector";

const SVGBG = () => {
  return (
    <React.Fragment>
      <Ellipse1 />
      <Ellipse2 />
      <Rect1 />
      <Rect2 />
      <Rect3 />
      <Rect4 />
      <Triangle />
      <Vector />
    </React.Fragment>
  );
};

export default SVGBG;
