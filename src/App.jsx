import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Mainloyauts from "./Mainloyouts/Mainloyauts"
import Home from "./pages/Home"
import TypesOffaoylation from "./pages/typesOffaoylation";
import Advantage from "./pages/Advantage";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Comment from "./pages/Comment";


export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainloyauts />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/typesOffaoylation",
          element: <TypesOffaoylation />
        },
        {
          path: "/advantage",
          element: <Advantage />
        },
        {
          path: "/comment",
          element: <Comment />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />
}
