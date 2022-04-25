import './App.css';
import React,{useEffect} from 'react';
import TodoList from './components/TodoList';

/*
useEffect(() => {
  if(localStorage.getItem('myKey')) {
    setState(localStorage.getItem('myKey');
  }
}, []);

useEffect(() => {
  localStorage.setItem('myKey', state);
}, [state]);
*/

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
