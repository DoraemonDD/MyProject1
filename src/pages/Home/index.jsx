import React, { Component } from 'react'
// import { Image } from 'antd'
// import ex1 from './imgs/example1.png'
// import ex2 from './imgs/example1.png'
// import ex3 from './imgs/animation.gif'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
import { Route, Redirect, Switch } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      // <div>
      //   <Image src={ex1} width={200} height={200}></Image>
      //   <Image src={ex2} width={200} height={200}></Image>
      //   <Image src={ex3} height={200}></Image>
      // </div>
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
