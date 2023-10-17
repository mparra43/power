import { Route, Routes } from 'react-router-dom'
import { Tasks } from './pages'
import { TasksProvider } from './context/tasks'

export const TasksRoutes = () => {
  return (
  
    <Routes>
      <Route path='' element={<TasksProvider><Tasks /></TasksProvider>} />
    </Routes>
  )
}
