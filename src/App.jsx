import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components/index'

function App() {
 
  const [todos, setTodo]=useState([])
  /*TODo's [{
      id:1,
      todo: "Todo Message",
      Completed: boolean value
  }]
  */
  //As, I want to add todo, on the top so, I used [,...prev]
  //Spread operator!
  function addTodo(todo) {
    setTodo((prev)=> {
      return [{
        id:Date.now(),
        ...todo
      }
      ,...prev]

      
    })
  }


  //Using map, iterating over all the todo's if I find the id, then updating it else not!
  function updateTodo(id, todo) {
    setTodo((prev)=>
      prev.map((prevTodo)=>
        prevTodo.id===id ? todo : prevTodo
      )
    )
  }

  //Fitering the todo's array, all the todo.id!==id will be remaining (jo id same hoga it won't be added into new array!)
  function deleteTodo(id) {
    setTodo((prev)=>
      prev.filter((todo)=>
        todo.id!==id
      )
    )
  }


  //Using spread operator 1. Checking the id, then spreads and toggles the state of it!
  function toggleTodo(id) {
    setTodo((prev)=>
      prev.map((prevTodo)=>
        prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }


//As soon as the component will mount this hook will be rendered!
useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0) {
    setTodo(todos)
  }

},[])



//Now, I want to set the values! So, use useEffect again
//so, if anything changes in the todos array set them
//localStorage does not accept the array so, convert (to string)

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
      {/* <TodoForm/>
      {
        todos.map((todo)=>(
          <div key={todo.id}>
            <TodoItem todo={todo}/>
          </div>
        ))
      } 
       //In simple this is it but adding styless*/}
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
