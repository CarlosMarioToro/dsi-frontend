import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.submenu) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span>{item.title}</span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>
        <div className="sidebar-content">
          {item.submenu.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to={item.url || "#"}
        className="sidebar-item"
        onClick={() => {
          const sideMenu = document.querySelectorAll(".sidebar");
          console.log(sideMenu);

          sideMenu[0].classList.add("hidden");
        }}
      >
        {" "}
        {item.title}
      </Link>
    );
  }
};

export default SidebarItem;
