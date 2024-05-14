import React from "react";
import Shape from "./Mathshape";
import { ShapeTypes } from "./constants";

export default function Mathshapes() {
  return (
    <div>
      Shapes
      <div id="container">
        <Shape color="red" type={ShapeTypes.circle} />
        <Shape />
        <Shape color="green" height={100} width={500} type={ShapeTypes.rect} />

        <Shape />
        <Shape />
      </div>
    </div>
  );
}