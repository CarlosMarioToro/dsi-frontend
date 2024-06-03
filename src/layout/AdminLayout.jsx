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
        const menuOpen = document.querySelectorAll('.open')
        sideMenu[0].classList.toggle('hidden');
        for (let i = 0; i < menuOpen.length; i++) {
          menuOpen[i].classList.remove('open');          
        }
        // setIsSideOpen(!isSideOpen);
    };

    return (
      <>
        <div className="main">
          <Sidebar options={items} />
          <div className="w-full sm:max-w-screen-2xl">
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