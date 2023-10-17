import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { publicRoutes } from "./public";


export const AppRoutes = () => {
 

  const commonRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Navigate to="/inicio" replace />,
    },
  ];

 

  const element = useRoutes([...commonRoutes, ...publicRoutes]);

  return <>{element}</>;
};
