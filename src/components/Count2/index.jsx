import React, { Component } from 'react'

export default class Count extends Component {
  // 加
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }

  //减
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }

  //奇数加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    const count = this.props.count
    if (count % 2 !== 0) {
      this.props.increment(value * 1)
    } else {
      return
    }
  }

  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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
