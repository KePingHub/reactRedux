import React from 'react'
import ReactDOM from 'react-dom'
import Counter2 from './components/Counter2'
import counter from './reducers/counter'
import {createStore} from './redux'
import Provider from './Provider'

let store = createStore(counter)

ReactDOM.render(
  <Provider store={store}>
    <Counter2/>
  </Provider>,
  document.querySelector('#root')
  )