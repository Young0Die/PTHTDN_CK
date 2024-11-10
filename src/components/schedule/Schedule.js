
import React, { Component } from 'react';
import './Schedule.css';
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
        };
    }

    // Hàm lấy 7 ngày tiếp theo
    getWeekDates() {
        const week = [];
        const { currentDate } = this.state;

        for (let i = 0; i < 7; i++) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() + i);
            week.push(date);
        }

        return week;
    }

    // Xử lý khi bấm nút "Today"
    handleToday = () => {
        this.setState({ currentDate: new Date() });
    };

    // Xử lý khi bấm nút "Next"
    handleNextWeek = () => {
        this.setState((prevState) => {
            const nextDate = new Date(prevState.currentDate);
            nextDate.setDate(nextDate.getDate() + 7);
            return { currentDate: nextDate };
        });
    };

    // Xử lý khi bấm nút "Previous"
    handlePreviousWeek = () => {
        this.setState((prevState) => {
            const prevDate = new Date(prevState.currentDate);
            prevDate.setDate(prevDate.getDate() - 7);
            return { currentDate: prevDate };
        });
    };

    render() {
        const weekDates = this.getWeekDates();
        // Dữ liệu cố định cho ca làm việc
        const fixedScheduleData = {
            morningShift: ["Anna", "Michael", "Sera"],
            afternoonShift: ["Yena", "John", "Sera"]
        };

        return (
            <div className="schedule-container">
                <div className="schedule-header">
                    <h2>Schedule</h2>
                    <div className="schedule-controls">
                        <span className= 'dayOfweek'>{`${weekDates[0].toLocaleDateString()} - ${weekDates[6].toLocaleDateString()}`}</span>
                        <button onClick={this.handlePreviousWeek}>< ArrowLeft size={28} className='arrow_icon' /></button>
                        <button onClick={this.handleNextWeek}><ArrowRight size={28} className='arrow_icon' /></button>
                        <button onClick={this.handleToday} className = 'today'>Today</button>
                    </div>
                </div>

                <div className="schedule-table">
                    <div className="schedule-row">
                        <div></div> 
                        {weekDates.map((date, index) => (
                            <div className="schedule-cell day-header" key={index}>
                                <div className= 'nameday'>{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                                <div className= 'numberday'>{date.getDate()}</div>
                            </div>
                        ))}
                    </div>

                    <div className="schedule-row">
                        <div className="shift-label ">Morning Shift</div>
                        {weekDates.map((_, index) => (
                            <div className="schedule-cell shift-cell" key={index}>
                                {fixedScheduleData.morningShift.map((employee, i) => (
                                    <div key={i} className="employee">{employee}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="divider"></div>
                    <div className="schedule-row">
                        <div className="shift-label">Afternoon Shift</div>
                        {weekDates.map((_, index) => (
                            <div className="schedule-cell shift-cell" key={index}>
                                {fixedScheduleData.afternoonShift.map((employee, i) => (
                                    <div key={i} className="employee">{employee}</div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;
