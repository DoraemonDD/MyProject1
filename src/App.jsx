import React from 'react'
import './App.css'
import axios from 'axios'

class App extends React.Component {
  getStudentData = () => {
    axios.get('').then((res) => {})
  }

  render() {
    return <div onClick={this.getStudentData}>获取学生数据</div>
  }
}

export default App
