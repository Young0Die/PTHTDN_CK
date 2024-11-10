import "./Main.css";
import MyBarChart from "../charts/MyBarChart";
import MyPieChart from "../charts/MyPieChart";
import { Coins, CalendarDots, VideoConference } from "@phosphor-icons/react";
import Schedule from '../schedule/Schedule';
const Main = (props) => { 
    const revenue = props.revenue;
    const appointment = props.appointment;
    const employees = props.employees;
    return (
        <main>
            <div className = "main__container">
                <div className="main__cards">
                    <div className="card">
                       
                        <div className="card_inner">
                            <div className="font-bold_text-title">{revenue}</div>
                            <p className="title_name">Revenue/month &nbsp; <Coins size={24} /></p>
                        </div>
                    </div>

                    <div className="card">
                        
                        <div className="card_inner">
                            <div className="font-bold_text-title">{appointment}</div>
                            <p className="title_name">Appointments &nbsp;<CalendarDots size={24} /></p>
                        </div>
                    </div>

                    <div className="card">                     
                        <div className="card_inner">
                            <div className="font-bold_text-title">{employees}</div>
                            <p className="title_name">Employees &nbsp;<VideoConference size={24} /></p> 
                        </div>
                    </div>
                    
                </div>
                        <div className = "charts">
                            <div className = "charts__left">
                                <div className = "charts__left__title">
                                    <div>
                                        <h1>Revenue Chart</h1>
                                    </div>
                                </div>
                                <MyBarChart/>
                            </div>
                            <div className = "charts__right">
                                <div className ="charts__right__title">
                                    <div>
                                        <h1>Pet Chart</h1>
                                    </div>
                                    <MyPieChart/>
                                </div>
                            </div>

                        </div>


                    </div>
                <div className = "main_schedule">
                <Schedule/>
                </div>

        </main>

    );
};
export default Main;