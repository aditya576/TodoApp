import React,{useState} from 'react';
import { useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos,settodos]=useState([])
    //const [completetodos,setcompletetodos]=useState([]);
    useEffect(()=>{
        getSavedTodos();
    },[]);
    useEffect(()=>{
        saveTodos();
    },[todos]);
    const addTodo=todo=>{
        if(!todo.text||/^\s*$/.test(todo.text)){
            return;
        }
        const newTodos=[todo, ...todos]
        settodos(newTodos)
        console.log(todo);
        console.log(...todos);
    }
    const updateTodo=(id,val)=>{
        if(!val.text||/^\s*$/.test(val.text)){
            return;
        }
        //todo.text=val;
        settodos(prev=>prev.map(item=>(item.id===id?val:item)));
    };
    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo=>todo.id!==id)
        settodos(removeArr);
    };

    const completeTodo=id=>{
        let x;
        let updatedTodos=todos.map(todo=>{
            if(todo.id===id){                
                todo.isComplete=true;                
                x=todo; 
                                       
            }
            return todo
        })
        const removeArr=[...todos].filter(todo=>todo.id!==id)
        settodos(removeArr);
        console.log(x);
        const newTodos=[...todos,x]
        settodos(newTodos);
        //settodos(updatedTodos);
       // updatedTodos=[...todos,x];
        //setcompletetodos(...completetodos,x);
        //settodos(updatedTodos);
    };
    
    const clear=id=>{
        const newtodos=[]
        settodos(newtodos)
    };
    const saveTodos=()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    }

    const getSavedTodos=()=>{
        //const tododata=
        if(localStorage.getItem("todos")===null)
            localStorage.setItem("todos",JSON.stringify([]));
        else{
            let savedtodo=JSON.parse(localStorage.getItem("todos")); 
            console.log(savedtodo);
            settodos(savedtodo);
        }
    }
    return (
        <div>
            <div >
            <center>
            <h1>Todo List</h1><nobr/></center>
            <button onClick={clear} className="todo-button reset">Reset</button>
            </div>
            <div align="center">
            <TodoForm onSubmit={addTodo} onReset={clear}/>
            <br/>
            <Todo 
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            />
            </div>
        </div>
    )
}


export default TodoList;