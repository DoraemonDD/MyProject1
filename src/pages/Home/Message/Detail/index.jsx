import React, { Component } from 'react'

const data = [
  { id: '01', content: 'hello,andy' },
  { id: '02', content: 'hello,kim' },
  { id: '03', content: 'hello,jack' },
]

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params
    const findResult = data.find((e) => {
      return e.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
