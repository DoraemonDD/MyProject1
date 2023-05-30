import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      { id: "1", name: "andy", done: true },
      { id: "2", name: "kim", done: true },
      { id: "3", name: "tom", done: true },
    ],
  };

  addTodo = (dataObj) => {
    const { todos } = this.state;
    const newTodos = [dataObj, ...todos];
    this.setState({ todos: newTodos });
  };

  updateCheck = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((e) => {
      if (e.id === id) return { ...e, done: done };
      else return e;
    });
    this.setState({ todos: newTodos });
  };

  removeItem = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  selectAll = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done };
    });
    this.setState({ todos: newTodos });
  };

  clearAll = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.done === false;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List
            todos={todos}
            updateCheck={this.updateCheck}
            removeItem={this.removeItem}
          ></List>
          <Footer
            todos={this.state.todos}
            selectAll={this.selectAll}
            clearAll={this.clearAll}
          ></Footer>
        </div>
      </div>
    );
  }
}

export default App;
