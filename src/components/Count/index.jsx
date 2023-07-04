import React, { Component } from 'react'
import store from '../../redux/store'
// 引入actionCreator，专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/actions/count'

export default class Count extends Component {
  // state = { count: 0 }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  // 加
  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value * 1))
  }

  //减
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }

  //奇数加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()

    if (count % 2 === 1) {
      store.dispatch(createIncrementAction(value * 1))
    } else {
      return
    }
  }

  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    // setTimeout(() => {
    store.dispatch(createIncrementAsyncAction(value * 1, 500))
    // }, 1000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={(e) => (this.selectNumber = e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
