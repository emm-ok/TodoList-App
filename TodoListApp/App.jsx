import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import '../App.css'

const App = () => {
    const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    })
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (task) => {
        setTodos([...todos, task]);
    }

    const removeTodo = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
    }

    const toggleUp = (index) => {
      const newTodos = [...todos];
      if(index > 0){
        [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
      }
      setTodos(newTodos);
    }
    
    const toggleDown = (index) => {
      const newTodos = [...todos];
      if(index < todos.length - 1){
        [newTodos[index + 1], newTodos[index]] = [newTodos[index], newTodos[index + 1]];
      }
      setTodos(newTodos)
    }

    const editTodo = (index) => {
      const newTodos = [...todos];
      const task = prompt('Edit Task:', todos[index]);
      if(task){
        newTodos[index] = task;
        setTodos(newTodos);
      }
    }


  return (
    <div className='flex flex-col items-center gap-4'>
        <h1 className='text-4xl text-white font-bold'>Todo List App</h1>
        <TodoInput addTodo={addTodo} />
        <TodoList 
          todos={todos}
          removeTodo={removeTodo} 
          toggleUp={toggleUp} 
          toggleDown={toggleDown} 
          editTodo={editTodo}/>
    </div>
  )
}

export default App