import { useState } from 'react';
import './Auth.css';
import logo from "../../assets/logoPet.png";
import { Envelope, Phone, Lock, User } from "@phosphor-icons/react";


const Auth = ({ onAuthenticated }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    // Dữ liệu mẫu cho email và mật khẩu
    const sampleEmail = "example@gmail.com";
    const samplePassword = "password123";

    const handleSignIn = (e) => {
        e.preventDefault();
        if (email === sampleEmail && password === samplePassword) {
            // Gọi hàm onAuthenticated từ App.js để cập nhật trạng thái xác thực
            onAuthenticated();
        } else {
            alert("Email hoặc mật khẩu không đúng.");
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Thực hiện đăng ký (có thể là gọi API)
        console.log("Đăng ký thành công");
        // Có thể thêm logic để chuyển tới trang chính nếu cần
    };

    return (
        <div className='auth_full'>
            <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
                <div className="form-container sign-up-container">
                    <div className="sidebar__img">
                        <img src={logo} alt="logo" />
                        <h2>PET CARE</h2>
                    </div>
                    <form onSubmit={handleSignUp}>
                        <h1>Create Account</h1>
                        <div className = 'input_icon_container'>
                            <User size={30} className='input_icon'  /> 
                            <input type="text" placeholder="Name"/>
                        </div> 
                        <div className='input_icon_container'>
                            <Envelope size={30} className='input_icon'/>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='input_icon_container'>
                            <Phone size={30} className='input_icon' />
                            <input type="text" placeholder="Phone number" />
                        </div>
                        <div className='input_icon_container'>
                            <Lock size={30} className='input_icon' />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <div className="sidebar__img">
                        <img src={logo} alt="logo" />
                        <h2>PET CARE</h2>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <h1>Sign in to PET CARE</h1>
                        <div className='input_icon_container'>         
                            <Envelope size={30} className='input_icon' />                   
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='input_icon_container'>
                            <Lock size={30} className='input_icon' />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login <br></br> with your personal info  </p>
                            <button className="ghost" onClick={() => setIsSignUp(false)}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start <br></br> exploring the website</p>
                            <button className="ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
