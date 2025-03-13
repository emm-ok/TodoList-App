import { FaEdit } from 'react-icons/fa';

const TodoList = ({ todos, removeTodo, toggleUp, toggleDown, editTodo }) => {
    
    const buttonStyles = 'p-2 rounded';
  return (
    <ul className="list-none flex flex-col gap-4">
        {todos.map((todo, index) => (
            <li key={index} className="w-auto flex justify-between items-center gap-96 p-4 bg-slate-400 text-2xl rounded shadow-md">
                {todo}
                <div className="flex gap-4">
                    <div className='bg-gray-300 shadow-md rounded'>
                        <button onClick={() => toggleUp(index)} className={buttonStyles}>⬆️</button>
                        <button onClick={() => toggleDown(index)} className={buttonStyles}>⬇️</button>
                    </div>
                    <button onClick={() => editTodo(index)} className={buttonStyles}>
                        <FaEdit />
                    </button>
                    <button onClick={() => removeTodo(index)} className={buttonStyles}>❌</button>
                </div>
            </li>
        ))}
    </ul>
  )
}

export default TodoList