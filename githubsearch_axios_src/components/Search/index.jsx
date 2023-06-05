import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    this.props.clearPics();
    const {
      searchEl: { value: keyWord }, // 连续解构赋值+重命名
    } = this;
    if (keyWord.trim() === "") alert("please input something");
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      (res) => {
        this.props.updateAppState({ isLoading: false, picArr: res.data.items });
      },
      (error) => {
        this.props.updateAppState({ isLoading: false, err: error });
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => {
              this.searchEl = c;
            }}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
