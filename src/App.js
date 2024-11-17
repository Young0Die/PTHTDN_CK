import { useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Auth from "./components/auth/Auth"; // Nhập Auth
import SchedulePage from "./components/schedulepage/SchedulePage";
import SetWorkSchedule from "./components/schedulepage/SetWorkSchedule";
import "./App.css";
import SignUpForWorkShift from "./components/schedulepage/SignUpForWorkShift";
import ProfilePage from "./components/profilepage/ProfilePage"
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const username = "Lê Vy";
  const revenue = "780,000,000";
  const appointment = "190";
  const employees = "5";
  const gender = "female";
  const numberPhone = "0829214929";
  const address = "123 Ton That Huyet p4 q4 HCM";
  const DOB = "30/03/2003";
  const email = "quyvylehoang3003@gmail.com";
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
      <div className="App">
        <div className="container">
          {isAuthenticated ? (
            <>
              <Navbar username={username} />
              {/* <Main revenue={revenue} appointment={appointment} employees={employees} /> */}
              {/* <SetWorkSchedule/> */}
              {/* <SchedulePage /> */}
              {/* <ProfilePage username={username} gender ={gender} numberPhone = {numberPhone} address = {address} DOB = {DOB} email = {email}/> */}
              <SignUpForWorkShift/>
              <Sidebar />
            </>
          ) : (
            <Auth onAuthenticated={handleAuthentication} />
          )}
        </div>
      </div>
  );
};
export default App;
