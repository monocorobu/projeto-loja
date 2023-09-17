import "./main.css";

import type { Router as RemixRouter } from "@remix-run/router";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

import { loginRoutes } from "./modules/login/routes";
import { useNotification } from "./shared/hooks/useNotification";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <div>Deu Erro</div>,
  },
];
const router: RemixRouter = createBrowserRouter([...loginRoutes, ...mainRoutes]);
function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
