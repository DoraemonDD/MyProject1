import React, { Component } from 'react'
import { createIncrementAction } from '../../redux/actions/count'
import { connect } from 'react-redux'

class Count2 extends Component {
  render() {
    const add = () => {
      this.props.jiafa(1)
    }
    return (
      <>
        <div>current page index:{this.props.count}</div>
        <div onClick={add}>点击加</div>
      </>
    )
  }
}

export default connect((state) => ({ count: state }), {
  jiafa: createIncrementAction,
})(Count2)
