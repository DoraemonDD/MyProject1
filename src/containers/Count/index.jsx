// import CountUI from '../../components/Count2'
// import {
//   createIncrementAction,
//   createDecrementAction,
//   createIncrementAsyncAction,
// } from '../../redux/count_action'

// // 引入connect用于连接UI组件与redux
// import { connect } from 'react-redux'

// /**
//  * 下面两个函数可以不写，直接写在connect里面
//  */
// // mapStateToPros函数返回的对象中的key就作为传递给UI组件props中的key,value作为传递给UI组件props的value————状态
// function mapStateToPros(state) {
//   return { count: state }
// }

// // mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props中的key,value作为传递给UI组件props的value————操作状态的方法
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: (data) => {
//       dispatch(createIncrementAction(data))
//     },
//     decrement: (data) => {
//       dispatch(createDecrementAction(data))
//     },
//     incrementAsync: (data, time) => {
//       dispatch(createIncrementAsyncAction(data, time))
//     },
//   }
// }

// export default connect(
//   mapStateToPros,
//   // mapDispatchToProps
//   // mapDispatchToProps的简写
//   {
//     increment: createIncrementAction,
//     decrement: createDecrementAction,
//     incrementAsync: createIncrementAsyncAction,
//   },
// )(CountUI)

// 将CountUI和connect整合到一个文件

import React, { Component } from 'react'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/actions/count'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

class Count extends Component {
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
        <h2>下方的人数为：{this.props.person}</h2>
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

function mapStateToPros(state) {
  return { count: state.sum, person: state.person.length }
}

export default connect(mapStateToPros, {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementAsync: createIncrementAsyncAction,
})(Count)
