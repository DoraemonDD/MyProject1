import React, { Component } from "react";
import qs from "qs";

const data = [
  { id: "01", content: "hello,andy" },
  { id: "02", content: "hello,kim" },
  { id: "03", content: "hello,jack" },
];

export default class Detail extends Component {
  render() {
    // 接受params参数
    const { id, title } = this.props.match.params;
    // 接受search参数
    // const { search } = this.props.location;
    // const result = qs.parse(search.slice(1));
    // const { id, title } = result;
    // 接受state参数
    console.log(this.props);
    // const { id, title } = this.props.location.state;
    const findResult = data.find((e) => {
      return e.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}
