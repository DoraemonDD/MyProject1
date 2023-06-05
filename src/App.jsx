import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
import "./App.css";

export default class App extends Component {
  state = {
    picArr: [], // 初始数组
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: "", // 存储请求相关错误信息
  };

  updateAppState = (stateObj) => {
    this.setState(stateObj);
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
          updateAppState={this.updateAppState}
        ></Search>
        <List {...this.state}></List>
      </div>
    );
  }
}
