import React from 'react'
import ReactDOM from 'react-dom'
import Counter2 from './components/Counter2'
import {store} from './store2'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Counter2/>
  </Provider>,
  document.querySelector('#root')
  )