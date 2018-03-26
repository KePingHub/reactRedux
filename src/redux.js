// 创建仓库
const createStore = reducer => {
	// 状态
	let state,
		  listeners = [] //监听函数数组
	// 获取最新状态
	let getState = () => state
	// 向仓库发送action
	let dispatch = action => {
		state = reducer(state, action)
		listeners.forEach(l => l())
	}
	// 订阅仓库的状态变化事件, 当状态发生变化之后会调用对应的监听函数
	// 订阅方法执行后会返回一个取消订阅的函数，调用它会取消订阅
	let subscribe = (listener) => {
		listeners.push(listener)
		return () => listeners.filter(l => l !== listener)
	}
  dispatch()
	return {
		getState,
		dispatch,
		subscribe
	}
}

export {createStore}