import { RouteObject } from 'react-router-dom'

import { lazyImport } from '../utils/lazyImport'

const { TransversalRoutes } = lazyImport(() => import('@/feature/transversal'), 'TransversalRoutes')
const { TasksRoutes } = lazyImport(() => import('@/feature/tasks'), 'TasksRoutes')


export const publicRoutes: RouteObject[] = [
  {
    path: '/*',
    element: < TransversalRoutes />,
  },

  {
    path: 'tareas/*',
    element: <TasksRoutes/>,
  },
 
]
