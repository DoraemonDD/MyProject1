import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { picArr, isFirst, isLoading, err } = this.props;

    return (
      <div className="row">
        {isFirst ? (
          <div>please input something</div>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : err ? (
          <div>{err.message}</div>
        ) : (
          picArr.map((pic) => {
            return (
              <div className="card" key={pic.id}>
                <a href={pic.html_url} target="_blank" rel="noreferrer">
                  <img src={pic.avatar_url} style={{ width: "100px" }} alt="" />
                </a>
                <p className="card-text">{pic.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
