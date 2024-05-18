import Sidebar from "../componentes/Sidebar";
import { Outlet } from "react-router-dom";
import items from "../data/sidebar.json";
import Cabecera from "../componentes/Cabecera";

const AdminLayout = () => {
    return (
        <>
            <div className="main">
                <Sidebar options={items} />
                <div className="container">
                    <Cabecera />
                    <Outlet />
                </div>
            </div>
        </>
    );   
};

export default AdminLayout;