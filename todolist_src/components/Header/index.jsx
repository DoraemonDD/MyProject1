import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (e) => {
    if (e.keyCode !== 13) return;
    if (e.target.value.trim() === "") return;
    const obj = { id: nanoid(), name: e.target.value, done: false };
    this.props.addTodo(obj);
    e.target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
