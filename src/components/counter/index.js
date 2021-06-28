import { useDispatch, useSelector } from 'react-redux'
import { decreaseCounter, increaseCounter, increaseCounterAsync } from './reducer'

const Counter = () => {

  // Get redux state
  const reduxState = useSelector((state) => state.counter.count)

  const dispatch = useDispatch()
  const decrease = () => { dispatch(decreaseCounter()) }
  const increase = () => { dispatch(increaseCounter()) }
  const increaseAsync = () => { dispatch(increaseCounterAsync()) }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>Increase Asynchronously</button>
      <button onClick={decrease}>Decrease</button>
      {reduxState}
    </div>

  )
}

export default Counter
