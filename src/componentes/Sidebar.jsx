import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import logoDSI from '../assets/images/Logodsi.ico'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <img src={logoDSI} alt="logoDSI" className="m-2 h-8 w-8" />
                {items.map((item, index) => (
                    <SidebarItem key={index} item={item}/>
                ))}
            </div>
        </>
    );
};


export default Sidebar;
