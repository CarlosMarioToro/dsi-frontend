import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
// import iconDSI from '../assets/images/Logodsi.ico'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar bg-gray-600 rounded-lg hidden">
                {/* <img src={iconDSI} alt="logoDSI" className="m-4 h-8 w-8" id="toggle" /> */}
                {items.map((item, index) => (
                    <SidebarItem key={index} item={item}/>
                ))}
            </div>
        </>
    );
};


export default Sidebar;
