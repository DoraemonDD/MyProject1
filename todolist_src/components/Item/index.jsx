import React from "react";
import "./index.css";

export default class Item extends React.Component {
  state = { mouse: false };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleChecked = (id) => {
    return (e) => {
      this.props.updateCheck(id, e.target.checked);
    };
  };

  removeItem = (id) => {
    return () => {
      if (window.confirm("are you sure to delete this item?")) {
        this.props.removeItem(id);
      }
    };
  };

  render() {
    let { id, name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "#fff" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done} //defaultChecked 只会在第一次生效
            onChange={this.handleChecked(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{
            display: this.state.mouse ? "block" : "none",
          }}
          onClick={this.removeItem(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
