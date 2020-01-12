import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
//import { render } from 'react-dom';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Buy food',
        completed: false
      },
      {
        id: 2,
        title: 'Edit pics',
        completed: false
      },
      {
        id: 3,
        title: 'Go to the church',
        completed: false
      },
    ]
  }

  // Toogle completed
  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  addTodo = (title) => {
    //console.log(title)
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  delTodo = (id) => {
    //const task = this.state.todos.filter(todo => todo.id !== id);
    //console.log(task);
    //this.setState({todos: this.state.todos.filter(todo => todo.id !== id )});
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
