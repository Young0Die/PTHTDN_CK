
import React, { useState } from 'react';
import './SchedulePage.css';
import Schedule from "../schedule/Schedule.js";
import { CaretDown } from "@phosphor-icons/react";

const SchedulePage = () => {
    const fixedScheduleData = ["Anna","Yena", "Michael","Sera","John"];
    const [isOpen, setIsOpen] = useState(false);

    // Hàm toggle để mở hoặc đóng dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Đóng dropdown nếu người dùng nhấn ra ngoài
    const handleClickOutside = (event) => {
        if (!event.target.closest(".dropdown_schedulepage")) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="schedule_page_container">
            <div className="button_Schedule">
                <button className="btn_SUshift">Sign Up for Work Shift</button>
                <button className="btn_SUshift">Edit Shift</button>

                {/* Dropdown cho Setting */}
                <div className="dropdown_schedulepage">
                    <button className="dropbtn_schedulepage" onClick={toggleDropdown}>
                       <div className = 'drop_icon'>Review Groomer Schedule <CaretDown size={25} /> </div>
                    </button>
                    {isOpen && (
                        <div className="dropdown-content_schedulepage">
                            {fixedScheduleData.map((name, index) => (
                                <a href="#" key={index}>
                                    {name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <button className="btn_SUshift">Set Work Schedule</button>
            </div>
            <Schedule />
        </div>
    );
};

export default SchedulePage;
