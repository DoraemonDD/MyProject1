import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { pics } = this.props;

    return (
      <div className="row">
        {pics.map((pic) => {
          return (
            <div className="card" key={pic.id}>
              <a
                href="https://github.com/reactjs"
                target="_blank"
                rel="noreferrer"
              >
                <img src={pic.avatar_url} style={{ width: "100px" }} alt="" />
              </a>
              <p className="card-text">reactjs</p>
            </div>
          );
        })}
      </div>
    );
  }
}
