import React, {Component} from 'react'
import {store} from '../store'
import {ADD_TODO, DELETE_TODO} from '../actions'


let addTodo = text => ({
  type: ADD_TODO,
  text
})
let deleteTodo = index => ({
  type: DELETE_TODO,
  index
})

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {list: store.getState().todo.list}
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        list: store.getState().todo.list
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleKeyDown = (e) => {
    let target = e.target
    if (e.keyCode === 13 && target.value.length > 0) {
      store.dispatch(addTodo(target.value))
      target.value = ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={(e) => this.handleKeyDown(e)}/>
        <ul>
          {
            this.state.list.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => store.dispatch(deleteTodo(index))}>删除</button>
              </li>
            ))
          }
        </ul>
      </div>
      )
  }
}