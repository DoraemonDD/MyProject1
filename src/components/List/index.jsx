import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateCheck: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
  };

  render() {
    const { updateCheck, removeItem } = this.props;
    return (
      <ul className="todo-main">
        {this.props.todos.map((e) => {
          return (
            <Item
              key={e.id}
              {...e}
              updateCheck={updateCheck}
              removeItem={removeItem}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
