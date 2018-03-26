import {ADD_TODO, DELETE_TODO} from '../actions'

let reducer = (state={list: []}, action) => {
  if (action === undefined) return state
  let list = state.list
  switch(action.type) {
    case ADD_TODO:
      return {list: [...list, action.text]}
    case DELETE_TODO:
      list.splice(action.index, 1)
      return {list: [...list]}
    default:
      return state
  }
}

export default reducer