// import { children } from "react";
import MainPage from "./MainPage";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import About from "./components/About";
import { createBrowserRouter , RouterProvider } from "react-router-dom";


function App() {
  
  const AppRouter = createBrowserRouter([{
    path: '/',
    element: <MainPage />,
    children : [
      {
        path : "/",
        element : <About />
      },
      {
        path : "resume",
        element : <Resume />
      },
      {
        path : "portfolio",
        element : <Portfolio />
      },
      {
        path : "contact",
        element : <Contact />
      }
    ],
    errorElement : <h1>Page Not Found, Check URL</h1>,
  }])

  return (
    <RouterProvider router={AppRouter}></RouterProvider>
  );
}

export default App;
