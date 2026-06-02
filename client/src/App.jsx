import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TaskDetail from './pages/TaskDetail'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error(error))
  }, [])

  function onAddTask(nouvelleTache) {
    setTasks((prev) => [...prev, nouvelleTache])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              tasks={tasks}
              onAddTask={onAddTask}
            />
          }
        />

        <Route
          path="/task/:id"
          element={<TaskDetail tasks={tasks} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App