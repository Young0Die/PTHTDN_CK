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
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
<<<<<<< HEAD
          (,xHoi dan IT)
=======
          Edit <code>src/App.js</code> and save to reload.
>>>>>>> 8a6cea8 (Initialize project using Create React App)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
    <div className="container">
      {isAuthenticated ? (
        <>
          <Navbar username={username} />
          <Main revenue={revenue} appointment={appointment} employees={employees} />
          <Sidebar />
        </>
      ) : (
          // <Auth onAuthenticated={handleAuthentication} />
      )}
>>>>>>> d7c198e (Cập nhật code và thêm các file mới)
    </div>
  );
};

export default App;
