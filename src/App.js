import {useReducer, useState} from 'react';
import './App.css';

function arithmaticreducer(state,action){
  if(action.type == 'increment'){
    return {count:state.count+1}
  } else if(action.type == 'increaseby10'){
    return {count:state.count+10}
  }else if(action.type == 'increaseby20'){
    return {count:state.count+20}
  }else if(action.type == 'decrease'){
    return {count:state.count-1}
  }else if(action.type == 'decreaseby10'){
    return {count:state.count-10}
  }else if(action.type == 'decreaseby20'){
    return {count:state.count-20}
  }
}

function App() {

const [state,dispatch] = useReducer(arithmaticreducer,{count:16})
  
  return (
    <div className="App">
      <h1> useState vs useReducer </h1>
    <div className='demo'>
    <button onClick={()=>dispatch({type:'increment'})}>+</button>
    <button onClick={()=>dispatch({type:'increaseby10'})}>+10</button>
    <button onClick={()=>dispatch({type:'increaseby20'})}>+20</button>

      {/* <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count+1)}>+5</button>
      <button onClick={()=>setCount(count+1)}>+10</button>
      <button onClick={()=>setCount(count+1)}>+20</button> */}
      <button>{state.count}</button>
       <button onClick={()=>dispatch({type:'decrease'})}>-</button>
       <button onClick={()=>dispatch({type:'decreaseby10'})}>-10</button>
       <button onClick={()=>dispatch({type:'decreaseby20'})}>-20</button>
      {/*<button onClick={()=>setCount(count-1)}>-5</button>
      <button onClick={()=>setCount(count-1)}>-10</button>
      <button onClick={()=>setCount(count-1)}>-20</button> */}
    </div>
    </div>
  );
}

export default App;
