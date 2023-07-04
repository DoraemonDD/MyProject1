/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入legacy_createStore(createStore已经弃用)
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
// 引入汇总之后的reducer
import reducer from './reducers'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'

// 暴露store
export default legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
