import { createContext, useContext } from "react";

//1. Create the context (just function which need to be accessible)
//2. Provider 

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"TODO Message!",
            completed:false
        }
    ],

    addTodo : (todo)=>{},
    updateTodo :(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const TodoProvider=TodoContext.Provider;

export const useTodo=()=> {
    return useContext(TodoContext);
}