import { useState } from 'react'

const TodoInput = ({ addTodo }) => {

    const [task, setTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!task.trim()) {
            setErrorMessage('Please fill the field!!!');
            return (
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000)
            )
        }
        addTodo(task);
        setTask('');
    }

  return (
    <div>
        <h1 className='text-red-700 text-xl'>{errorMessage}</h1>
        <form onSubmit={handleSubmit} className='flex gap-4'>
        <input 
            type="text"  
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a Task..."
            className='w-96 p-4 outline-none border-2 rounded'
        />
        <button type='submit' className='p-4 text-xl font-bold rounded bg-slate-800 text-white'>Add Task</button>
    </form>
    </div>
)
}

export default TodoInput