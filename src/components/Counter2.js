import React, {Component} from 'react'
import connect from '../connect'
import {INCREASE, DECREASE} from '../actions'

class Counter2 extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={() => this.props.onIncrease(1)}>+</button>
        <button onClick={() => this.props.onDecrease(2)}>-</button>
      </div>
      )
  }
}

// mapStateToProps 把store里的状态对象映射成属性
let mapStateToProps = state => ({
  number: state.number
})
// mapDispatchToProps 把store里的dispatch映射成属性
let mapDispatchToProps = dispatch => ({
  onIncrease: amount => dispatch({type: INCREASE, amount}),
  onDecrease: amount => dispatch({type: DECREASE, amount})
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)