import React, { Component } from "react";
import { Link, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              {/* children也属于标签的一个属性等于标签之间的内容 */}
              <MyNavLink
                // replace
                title="Home"
                to="/home"
                children="home"
              ></MyNavLink>
              <MyNavLink
                // replace={true}
                title="About"
                to="/about"
                children="about"
              ></MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 当存在多了同路径的路由时，使用Switch只会匹配第一个符合的 */}
                {/* 开启严格匹配 <Route exact path="/about" component={About} /> ，不写exact则为模糊匹配 */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Route path="/home" component={Test} />
                  <Redirect to="/home"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
