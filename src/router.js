import {Outlet,createBrowserRouter } from "react-router-dom";
import App from"./App";
import Movies from "./routes/Movies";
import TV from "./routes/TV";
import NotFound from "./routes/NotFound";
import Detail from "./routes/Detail";
import Search from "./routes/Search";

const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/", 
        element: <App />
      }, 
      {
        path: "/movies", 
        element: <Movies />
      },
      {
        path: "/tv", 
        element: <TV />
      },
      {
        path: "/detail/:id", 
        element: <Detail />
      },
      {
        path: "/search", 
        element: <Search />
      }

    ]
  
  },
  
]);

export default router;