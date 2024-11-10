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
            <div className="sidebar__menu">
                <div className = "sidebar__link ">
                    <House size={25}/>  
                    <a href="#"><div className="icon">Dashboard</div></a>
                </div>
                {/* <h2>MNG</h2> */}
                <div className="sidebar__link">
                    <CalendarBlank size={25} />
                    <a href="#"><div className="icon">Schedule</div></a>
                </div>
                <div className="sidebar__link">
                    <ListBullets size={25} />
                    <a href="#"><div className="icon">Appointments</div></a>
                </div>
                <div className="sidebar__link">
                    <Users size={25}  />
                    <a href="#" ><div className="icon">Customers</div></a>
                </div>
                <div className="sidebar__link">
                    <UserList size={25}  />
                    <a href="#" ><div className="icon">Staffs</div></a>
                </div>
                <div className="sidebar__link">
                    <Package size={25}  />
                    <a href="#" ><div className="icon">Services</div></a>
                </div>
                <div className="sidebar__link">
                    <User size={25}  />
                    <a href="#"><div className="icon">Profile</div></a>
                </div>

                {/* <h2>LEAVE</h2>

                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">Apply for leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Paygrade</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div> */}


            </div>
        </div>
    );
};

export default Sidebar;