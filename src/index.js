//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
//
import { BrowserRouter, HashRouter } from 'react-router-dom'
//引入App
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

// 有了provider不用在App组件里面一个个写store
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <App></App>
    {/* </BrowserRouter> */}
  </Provider>,

  // <HashRouter>
  //   <App></App>
  // </HashRouter>
)

/**
 * 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
   如果有react-redux就不需要下面的代码页面也能刷新 
 */
// store.subscribe(() => {
//   root.render(
//     <BrowserRouter>
//       <App></App>
//     </BrowserRouter>,
//   )
// })
