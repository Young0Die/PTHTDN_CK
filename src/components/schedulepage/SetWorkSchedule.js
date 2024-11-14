
import React, { useState } from 'react';
import './SetWorkSchedule.css';
import Schedule from "../schedule/Schedule.js";
import { CaretLeft } from "@phosphor-icons/react";

const SetWorkSchedule = () => {
    
    return (
        <div className="setworkschedule_container">
            <button className="btn_back">Back <CaretLeft size={20}/></button>
            <h1>Set Work Schedule</h1>
            <Schedule />
            <button className="btn_Confirm"><div className='text_button'>Confirm</div></button>
        </div>
    );
};

export default SetWorkSchedule;
