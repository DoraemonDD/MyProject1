import React, { Component } from "react";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map((e, i) => {
            return (
              <li id={e.id}>
                {/* 传递params参数 */}
                <Link to={`/home/message/detail/${e.id}/${e.title}`}>
                  {e.title}
                </Link>
                &nbsp;<button>push查看</button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(e.id, e.title);
                  }}
                >
                  replace查看
                </button>
                {/* 传递search参数 */}
                {/* <Link to={`/home/message/detail/?id=${e.id}&title=${e.title}`}>
                  {e.title}
                </Link> */}
                {/* 向路由组件传递state参数 */}
                {/* <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: e.id, title: e.title },
                  }}
                >
                  {e.title}
                </Link> */}
              </li>
            );
          })}
        </ul>
        <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route>
        {/* search参数无需申明接受 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}
        {/* state参数无需申明接受 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}
      </div>
    );
  }
}
