import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({item}) => {
    const [open, setOpen] = useState(false);
    
    if(item.submenu){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    <i className="bi-chevron-down toggle-btn"></i>
                </div>
                <div className="sidebar-content">
                    {item.submenu.map((child, index) => (
                        <SidebarItem key={index} item={child} />
                    ))}
                </div>
            </div>
        );
    }else{
        return (
            <Link to={item.url || "#"} className="sidebar-item plain">
                {" "}
                {item.icon && <i className={item.icon}></i>}
                {item.title}
            </Link>
            // <a href={item.url || "#"} className="sidebar-item plain">
            // { item.icon && <i className={item.icon}></i> }
            // {item.title}
            // </a>
        );
    }
};

export default SidebarItem;
