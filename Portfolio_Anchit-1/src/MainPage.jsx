import { Outlet } from "react-router-dom";
import Aside from "./components/Aside";
import NavBar from "./components/Navbar";

const MainPage = () =>{
    return (
    <main>
    <Aside />
    <div className="main-content">
      <NavBar />
      <Outlet />
    </div>
  </main>
    )
}

export default MainPage;