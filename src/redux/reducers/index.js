/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */
// 引入combineReducers，用于汇总多个reducer
// 引入为Count组件服务的reducer
import { combineReducers } from 'redux'
import countReducer from './count'
import personReducer from './person'

const allReducers = {
  sum: countReducer,
  person: personReducer,
}

export default combineReducers(allReducers)
