import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
  state = { picArr: [] };

  getPicData = (pics) => {
    console.log("pic", pics);
    this.setState({ picArr: pics });
  };

  clearPics = () => {
    const { picArr } = this.state;
    const newArr = [];
    this.setState({ picArr: newArr });
  };

  render() {
    return (
      <div className="container">
        <Search
          clearPics={this.clearPics}
          getPicData={this.getPicData}
        ></Search>
        <List pics={this.state.picArr}></List>
      </div>
    );
  }
}
