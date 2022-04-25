import React, {useState,useEffect,useRef} from 'react';

var x=0;
function TodoForm(props) {
    const [input, setInput]=useState(props.edit?props.edit.value:' ') //Value of the state and the function that will change the state
    const handleChange=e=>{
        setInput(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id:x,
            text:input
        });
        x++;
        setInput('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit?(
            <>
            <input type="text" placeholder="Add a todo"
            value={input}
            name="text" className="todo-input" 
            onChange={handleChange}
            />  
            <button className='todo-button'>Update</button>
            </>
            ):
            (
            <>
            <input type="text" placeholder="Add a todo"
            value={input}
            name="text" className="todo-input"
            onChange={handleChange}
            /><button className='todo-button'>Add Todo</button></>
            )            
            }
        </form>
    )
}

// #endregion

export default TodoForm;