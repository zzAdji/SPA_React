import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TaskDetail from './pages/TaskDetail'
import { loadTasksFromStorage, STORAGE_KEY } from './utils/taskStorage'

function App() {
  const [tasks, setTasks] = useState(loadTasksFromStorage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function onAddTask(nouvelleTache) {
    setTasks([...tasks, nouvelleTache])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard tasks={tasks} onAddTask={onAddTask} />} />
        <Route path="/task/:id" element={<TaskDetail tasks={tasks} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
