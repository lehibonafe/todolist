import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todo: {
        text: '',
        key: '',
        completed: false
      },
      todoList: []
    }

    this.addItem = this.addItem.bind(this)
    this.handleTodo = this.handleTodo.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.focusInput = React.createRef()
    this.completeTask = this.completeTask.bind(this)
  }
  componentDidMount(){
    this.focusInput.current.focus()
  }
  
  addItem(e){
    e.preventDefault()
    const newItem = this.state.todo
    if(newItem !== ''){
      this.setState({
        todo: {
          text: '',
          key: '',
          completed: false
        },
        todoList: [...this.state.todoList, newItem]
      })
    }

  }
  completeTask(key){
    const todos = this.state.todoList
    let updateTodos = todos.map(todo => {
      if(todo.key === key) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({
      todoList: updateTodos
    })
  }
  removeItem(key){
    const filteredItems = this.state.todoList.filter(item => item.key !== key)
    this.setState({
      todoList: filteredItems
    })
  }

  handleTodo(e){
    this.setState({
      todo: {
        text: e.target.value,
        key: Date.now(),
        completed: false
      }
    })
  }

  render(){
    return (
      <div className="App">
        <TodoForm 
          addItem={this.addItem}
          todo={this.state.todo.text}
          handleTodo={this.handleTodo}
          focusInput={this.focusInput}
          taskCounter={this.state.todoList.length}
        />
        <TodoList
          removeItem={this.removeItem}
          completeTask={this.completeTask}
          todoList={this.state.todoList}
        />
      </div>
    )
  }
}

export default App;
