import React from "react";
import "./index.css";

export default class Footer extends React.Component {
  selectAll = (e) => {
    this.props.selectAll(e.target.checked);
  };
  clearAllItem = () => {
    this.props.clearAll();
  };

  render() {
    const { todos } = this.props;
    const todoCount = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={
              todoCount === this.props.todos.length &&
              this.props.todos.length !== 0
                ? true
                : false
            }
            onChange={this.selectAll}
          />
        </label>
        <span>
          <span>已完成{todoCount}</span> / 全部{this.props.todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.clearAllItem}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
