import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ],
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map((e, i) => {
            return (
              <li id={e.id}>
                <Link to={`/home/message/detail/${e.id}/${e.title}`}>
                  {e.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route>
      </div>
    )
  }
}
