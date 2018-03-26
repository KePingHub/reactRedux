import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from './redux'
const DECREASE = 'DECREASE'
const INCREASE = 'INCREASE'

let reducer = (state={number: 0}, action) => {
  if (action === undefined) return state
  switch (action.type) {
    case INCREASE:
      return {number: state.number + action.amount}
    case DECREASE:
      return {number: state.number - action.amount}
    default:
      return state
  }
}

let store = createStore(reducer)
let increase = amount => ({
  type: INCREASE,
  amount
})
let decrease = amount => ({
  type: DECREASE,
  amount
})

class Counter extends Component {
  constructor() {
    super()
    this.state = {number: store.getState().number}
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().number
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch(increase(1))}>+</button>
        <button onClick={() => store.dispatch(decrease(2))}>-</button>
      </div>
      )
  }
}

ReactDOM.render(
  <Counter/>,
  document.querySelector('#root')
  )