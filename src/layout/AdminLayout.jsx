import Sidebar from "../componentes/Sidebar";
import { Outlet } from "react-router-dom";
import items from "../data/sidebar.json";
import Cabecera from "../componentes/Cabecera";
import iconDSI from '../assets/images/Logodsi.ico'
// import { useState } from "react";

const AdminLayout = () => {
    
    // const [isSideOpen, setIsSideOpen] = useState(false);
    const mostrarMenu = () => {
        const sideMenu = document.querySelectorAll('.sidebar');
        console.log(sideMenu);
        console.log('Mostrar Menu');
        sideMenu[0].classList.remove('hidden');
        // setIsSideOpen(!isSideOpen);
    };
    return (
      <>
        <div className="main">
          <Sidebar options={items} />
          <div className="container sm:max-w-screen-xl">
            <div className="cursor-pointer" onClick={mostrarMenu}>
              <img
                src={iconDSI}
                alt="icoDSI"
                className="m-2 h-8 w-8 absolute top-2 left-2"
              />
            </div>
            <Cabecera />
            <Outlet />
          </div>
        </div>
      </>
    );   
};

export default AdminLayout;