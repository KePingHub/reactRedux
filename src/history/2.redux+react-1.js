import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from './redux'
const DECREASE = 'DECREASE'
const INCREASE = 'INCREASE'

let reducer = (state={number: 0}, action) => {
  if (action === undefined) return state
  switch (action.type) {
    case INCREASE:
      return {number: ++state.number}
    case DECREASE:
      return {number: --state.number}
    default:
      return state
  }
}

let store = createStore(reducer)

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{store.getState().number}</p>
        <button onClick={() => store.dispatch({type: INCREASE})}>+</button>
        <button onClick={() => store.dispatch({type: DECREASE})}>-</button>
      </div>
      )
  }
}

let render = () => {
  ReactDOM.render(
  <Counter/>,
  document.querySelector('#root')
  )
}
store.subscribe(render)
render()