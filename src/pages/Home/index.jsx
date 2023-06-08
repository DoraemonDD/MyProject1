import React, { Component } from "react";
import { Image } from "antd";
import ex1 from "./imgs/example1.png";
import ex2 from "./imgs/example1.png";
import ex3 from "./imgs/animation.gif";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Image src={ex1} width={200} height={200}></Image>
        <Image src={ex2} width={200} height={200}></Image>
        <Image src={ex3} height={200}></Image>
      </div>
    );
  }
}
