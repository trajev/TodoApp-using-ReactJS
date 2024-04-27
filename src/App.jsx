import {useState} from "react"
import './App.css'

function App() {

  const [todoList, setTodoList] = useState(["test"]);
  const [completedList , setCompletedList] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  function handleAddTodo(){ 
    if (todoInput.length>0 ) {
      setTodoList([ ...todoList, todoInput ]); 
      console.log("todolist items: " + todoList );
    }
    setTodoInput("");
  }

  function handleCompleted(todo) {
    let item = todoList.find( t=>t===todo );
    setCompletedList( [ ...completedList , item ] );
    setTodoList( todoList.filter(item => item!==todo) );
  }

  function handleCompletedTodo(todo){
    let item = completedList.find( t=>t===todo);
    console.log("clicked item: " + item );
    setTodoList( [...todoList, todo] )
  }


  function handleEdit(todo){
    setTodoInput(todo)
    setTodoList( todoList.filter(item=>item!=todo) )
  }


  return (
    <>

      <div className="container">

        <h1 className='capitalize font-bold text-3xl'> Todo app </h1>

        <div className='py-5 flex justify-center gap-5'>
          <input type="text" placeholder='enter your todo ' className='border px-5 py-3 w-1/2 border-zinc-500 rounded-md focus:outline-none'
          onChange={e=>{ setTodoInput(e.target.value)} } value={todoInput} />
          <button className="border border-zinc-500 px-8 rounded-md capitalize font-semibold hover:bg-zinc-100 "
          onClick={handleAddTodo} >add</button>
        </div>


        { (todoList.length>0) && (
        <div className='flex flex-col gap-4 items-center mt-10'>
          <h2 className="capitalize font-semibold text-xl ">Your todos</h2>
          {
            todoList.map( (todo)=>{
              return (
                <div className="w-full">
                  <button className='border border-zinc-500 p-2 w-[57%] rounded-md hover:bg-zinc-50 capitalize' onClick={ () => handleCompleted(todo) }> {todo} </button>
                  <button onClick={()=>handleEdit(todo)} className="ml-5" ><i className="ri-pencil-fill"></i></button>
                </div>
              
            )
            } )
          }
        </div>
        ) }

        
        { (completedList.length>0) && (
        <div className='flex flex-col gap-4 items-center mt-10'>
          <h2 className="capitalize font-semibold text-xl ">Completed todos</h2>
          {
            completedList.map( (todo)=>{
              return <button className='border border-zinc-500 p-2 w-[60%] rounded-md hover:bg-zinc-50 capitalize line-through bg-zinc-100'
               onClick={()=>handleCompletedTodo(todo)}> {todo} </button>
            } )
          }
        </div>
        ) }

      </div>


    </>
  )
}

export default App
