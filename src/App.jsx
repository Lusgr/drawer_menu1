import { useState, useCallback, useMemo, useRef, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './Button'
import './App.css'

function App() {
  const [addTask, setAddTask] = useState([])

  function addaTask(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const firstInput = formData.get("inputName")
    e.target.reset()

    const newTask = {
      task:firstInput
    }
    setAddTask([...addTask, newTask])
  }



  return (
    <>
     
      <form onSubmit={addaTask}>
        <label htmlFor='inputName'></label>
        <input type="text" id="inputName" name="inputName"></input>
      </form>
     <div>
      <button type='submit'>
        Add
      </button>
     </div>
     <div>
      <span>Tasks</span>
      <ul>
         {addTask.map((task, index) => (
           <li key={index}>{task.task}</li>
         ))}
      </ul>
     </div>
    </>
  )
}

export default App