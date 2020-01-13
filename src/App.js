import React, {Component} from 'react';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import { render } from 'react-dom';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Buy food',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Edit pics',
        completed: false
      },
      {
        id: uuid.v4(),
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
      id: uuid.v4(),
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
      <Router>
        <div className="App">
          <div classname="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo} />
              </React.Fragment>
            )} /> 
          <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
