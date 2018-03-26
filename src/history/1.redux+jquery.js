import {createStore} from './redux'
import $ from 'jquery'

$(document.body).append(`
  <p id="counter"></p>
  <button id="increase">+</button>
  <button id="decrease">-</button>
`)

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

let render = () => {
  $('#counter').html(store.getState().number)
}
store.subscribe(render)

$('#increase').click(() => {
  store.dispatch({type: INCREASE})
})
$('#decrease').click(() => {
  store.dispatch({type: DECREASE})
})
render()