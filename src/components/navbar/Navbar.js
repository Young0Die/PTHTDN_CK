import "./Navbar.css";
import avatar from "../../assets/logoPet.png";
import { User, GearSix, Bell, SignOut } from "@phosphor-icons/react";

const Navbar = (props) => {
    const username = props.username;
    return(
        <nav className = "navbar">
            <div className = "navbar__left">
                    <div className="Users">
                        <User size={45} />
                    </div>
                    <div className="main__greeting">
                        <div className="user_name">Hi! {username}</div>
                        <p>Welcome back to PET CARE</p>
                    </div>
            </div>
            <div className = "navbar__right">              
                <div class="dropdown" >
                    <button class="dropbtn" onclick="toggleDropdown()"><GearSix size={32} />Setting</button>
                    <div class="dropdown-content">
                        <a href = "#"><User/> Profile</a>
                        <a href="#"><SignOut/>Log out</a>
                    </div>
                </div>
                <a href="#">
                    <Bell size={40} />
                </a>
              
            </div>
        </nav>
    );
};
export default Navbar;