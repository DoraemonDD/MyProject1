import React from "react";
import styl from "./index.module.scss";

export default class Hello extends React.Component {
render() {
  return <div className={styl.title}>Hello</div>;
  }
}
