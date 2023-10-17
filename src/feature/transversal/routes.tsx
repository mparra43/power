import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'

export const TransversalRoutes = () => {
  return (
    <Routes>
      <Route path='inicio' element={<Home />} />
    </Routes>
  )
}
