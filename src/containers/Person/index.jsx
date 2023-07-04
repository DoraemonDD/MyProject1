import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    return (
      <div>
        <h2>我是Person组件</h2>
        <h3>上方组件求个为：{this.props.sum}</h3>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.person.map((e) => {
            return (
              <li key={e.id}>
                {e.name}--{e.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect((state) => ({ person: state.person, sum: state.sum }), {
  addPerson: createAddPersonAction,
})(Person)
