import {Outlet,createBrowserRouter } from "react-router-dom";
import App from"./App";
import Movies from "./routes/Movies";
import TV from "./routes/TV";
import NotFound from "./routes/NotFound";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import Chakra from "./routes/Chakra";
import Mui from "./routes/Mui";

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
      },
      {
        path: "/chakra", 
        element: <Chakra />
      },
      {
        path: "/mui", 
        element: <Mui />
      }

    ]
  
  },
  
]);

export default router;