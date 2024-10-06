import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({todo}) {

    const [isTodoeditable, setIsTodoeditable]=useState(false)
    const [todoMsg, setTodomsg]=useState(todo.todo)
    const {updateTodo,deleteTodo,toggleTodo}=useTodo()

    //we have to update if someone wants to change the input data 
    const editTodo= ()=> {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoeditable(false)
    }

    //Toggle complete (just for the visual aspect!)
    const toggleCompleted = ()=> {
        toggleTodo(todo.id)
    }


    return(
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
            ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
                <input
                type='checkbox'
                className='cursor-pointer'
                checked={todo.completed}
                onChange={toggleCompleted}
                />
                <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg 
                ${isTodoeditable ? "border-black/10 px-2" : "border-transparent"}`}
                value={todoMsg}
                readOnly={!isTodoeditable}
                onChange={(e)=> setTodomsg(e.target.value)}
                />
                <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
                onClick={()=>{
                    if(todo.completed) return;
                    if(isTodoeditable) {
                        editTodo()
                    }
                    else {
                        setIsTodoeditable((prev)=> !prev)
                    }
                }}
                disabled={todo.completed}
                >{isTodoeditable ? "📁" : "✏️"}</button>

                <button
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
                onClick={()=> deleteTodo(todo.id)}
                >❌</button>
            </div>

    )
}
export default TodoItem