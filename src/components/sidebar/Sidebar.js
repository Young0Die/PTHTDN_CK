import "./Sidebar.css";
import logo from "../../assets/logoPet.png";
import { House, CalendarBlank, ListBullets, Users, UserList, Package, User } from "@phosphor-icons/react";

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return(
        <div className = {sidebarOpen ? "sidebar-responsive" : ""} id = "sidebar">
            <div className = "sidebar__title">
                <div className = "sidebar__img">
                    <img src = {logo} alt = "logo"/>
                    <h1>PET CARE</h1>
                </div>
            </div>
                <hr className="divider_sidebar" />

            <div className="sidebar__menu">
                <div className = "sidebar__link ">
                    <House size={25}/>  
                    <a className = "dashboard" href="/"><div className="icon">Dashboard</div></a>
                </div>
                <div className="sidebar__link">
                    <CalendarBlank size={25} />
                    <a href="/schedule"><div className="icon">Schedule</div></a>
                </div>
                <div className="sidebar__link">
                    <ListBullets size={25} />
                    <a href="/appointments"><div className="icon">Appointments</div></a>
                </div>
                <div className="sidebar__link">
                    <Users size={25}  />
                    <a href="/customers" ><div className="icon">Customers</div></a>
                </div>
                <div className="sidebar__link">
                    <UserList size={25}  />
                    <a href="staffs" ><div className="icon">Staffs</div></a>
                </div>
                <div className="sidebar__link">
                    <Package size={25}  />
                    <a href="services" ><div className="icon">Services</div></a>
                </div>
                <div className="sidebar__link">
                    <User size={25}  />
                    <a href="profile"><div className="icon">Profile</div></a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;