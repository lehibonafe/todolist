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
        key: ''
      },
      todoList: []
    }

    this.addItem = this.addItem.bind(this)
    this.handleTodo = this.handleTodo.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  
  addItem(e){
    e.preventDefault()
    const newItem = this.state.todo
    if(newItem !== ''){
      this.setState({
        todo: {
          text: '',
          key: ''
        },
        todoList: [...this.state.todoList, newItem]
      })
    }

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
        key: Date.now()
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
        />
        <TodoList
          removeItem={this.removeItem}
          todoList={this.state.todoList}
        />
      </div>
    )
  }
}

export default App;
