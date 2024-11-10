// import {useState} from 'react';
// import Navbar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
// import Main from "./components/main/Main";
// import  "./App.css";
// import Auth from './components/auth/Auth';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // const openSidebar = () => {
//   //   setSidebarOpen(true);
//   // };

//   // const openSidebar = () => setSidebarOpen(true);
//   const closeSidebar = () => setSidebarOpen(false);

//   const username = "Lê Vy";
//   const revenue = "780,000,000";
//   const appointment = "190";
//   const employees = "5";

//   const handleAuthSuccess = () => {
//     setIsAuthenticated(true);
//   };
//   return (
//     <div className="container">
//       {isAuthenticated ? (
//         <>
//           <Navbar username={username} />
//           <Main revenue={revenue} appointment={appointment} employees={employees} />
//           <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
//         </>
//       ) : (
//         <Auth onAuthSuccess={handleAuthSuccess} />
//       )}
//     </div>
//   );
// };

// export default App;
import { useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Auth from "./components/auth/Auth"; // Nhập Auth
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const username = "Lê Vy";
  const revenue = "780,000,000";
  const appointment = "190";
  const employees = "5";
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
            <Main revenue={revenue} appointment={appointment} employees={employees} />
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
