import './App.css';
import { DecAction, IncAction, ResetAction } from './redux/Actions';
import { useSelector, useDispatch } from "react-redux";


function App() {
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch();
  console.log(count);

  return (
    <>
    <h1>Counter</h1>
    <h1>{count}</h1>
    <button style={{backgroundColor:"rgba(255,235,123,0.5)"}} onClick={()=>dispatch(IncAction(5))}>Increment</button>
    <button style={{backgroundColor:"rgba(123,123,234,0.5)"}} onClick={()=>dispatch(DecAction(5))}>Decrement</button>
    <button style={{backgroundColor:"rgba(84,65,94,0.4)"}} onClick={()=>dispatch(ResetAction())}>Reset</button>
    </>
  )
}

export default App
