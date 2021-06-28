import { createStore, applyMiddleware, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'


const makeStore = (initialState) => {
  
  const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  )
}

export default createWrapper(makeStore, {debug: true})
