import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Component/Blog/Blog";
import Home from "./Component/Home/Home";
import Statistics from "./Component/Statistics/Statistics";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/blog", element: <Blog></Blog> },
      ],
    },
    {
      path: "*",
      element: (
        <div className="mt-20">
          <h1 className="text-5xl text-center">Sorry Page not Found</h1>
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
