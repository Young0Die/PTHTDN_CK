// import React, { useState } from 'react';
// import './SignUpForWorkShift.css';
// import { CaretLeft } from "@phosphor-icons/react";

// const SignUpForWorkShift = () => {
//     const [selectedShifts, setSelectedShifts] = useState({});
//     const handleShiftChange = (day, shift) => {
//         setSelectedShifts({
//             ...selectedShifts,
//             [day]: shift,
//         });
//     };
//     return (
//         <div className="signupforworkshift_container">
//             <button className="btn_back">Back <CaretLeft size={20} /></button>
//             <h1>Sign Up For Work Shift</h1>
//             <form>
//                 <div className="form-group">
//                     <label>Groomer Name:</label>
//                     <select>
//                         <option>Name</option>
//                         <option>Anna</option>
//                         <option>Michael</option>
//                         <option>John</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label>Date:</label>
//                     <span>8/10 - 13/10</span>
//                 </div>
//                 <div className="form-group shifts">
//                     <label>
//                         Shift <span className="note">(Note: Must register for at least 5 shifts):</span>
//                     </label>
//                     {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
//                         <div key={day} className="shift-row">
//                             <span>{day}:</span>
//                             <label>
//                                 <input
//                                     type="radio"
//                                     name={day}
//                                     value="Morning"
//                                     checked={selectedShifts[day] === 'Morning'}
//                                     onChange={() => handleShiftChange(day, 'Morning')}
//                                 />
//                                 Morning
//                             </label>
//                             <label>
//                                 <input
//                                     type="radio"
//                                     name={day}
//                                     value="Afternoon"
//                                     checked={selectedShifts[day] === 'Afternoon'}
//                                     onChange={() => handleShiftChange(day, 'Afternoon')}
//                                 />
//                                 Afternoon
//                             </label>
//                         </div>
//                     ))}
//                 </div>
//                 <button type="button" className="btn_Confirm">
//                     <div className='text_button'>Confirm</div>
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default SignUpForWorkShift;

import React, { useState, useEffect } from 'react';
import './SignUpForWorkShift.css';
import { CaretLeft } from "@phosphor-icons/react";


const SignUpForWorkShift = ({  }) => {
    const [selectedShifts, setSelectedShifts] = useState({});
    const [weekRange, setWeekRange] = useState(''); // Chỉ hiển thị ngày đầu và cuối tuần
    const [errorMessage, setErrorMessage] = useState('');

    // Tự động cập nhật ngày trong tuần tới
    useEffect(() => {
        const getWeekRange = () => {
            const today = new Date();
            const nextMonday = new Date(today.setDate(today.getDate() + (1 - today.getDay() + 7) % 7)); // Lấy thứ 2 tuần tới
            const nextSaturday = new Date(nextMonday); // Lấy thứ 7 tuần tới
            nextSaturday.setDate(nextMonday.getDate() + 5);

            // Định dạng ngày (MM/DD)
            const formatDate = (date) =>
                `${date.getMonth() + 1}/${date.getDate()}`;

            return `${formatDate(nextMonday)} - ${formatDate(nextSaturday)}`;
        };
        setWeekRange(getWeekRange());
    }, []);

    // Xử lý chọn shift
    const handleShiftChange = (day, shift) => {
        const currentShifts = selectedShifts[day] || [];
        const newShifts = currentShifts.includes(shift)
            ? currentShifts.filter((s) => s !== shift) // Bỏ shift nếu đã chọn
            : [...currentShifts, shift]; // Thêm shift nếu chưa chọn

        setSelectedShifts({
            ...selectedShifts,
            [day]: newShifts,
        });
    };

    // Kiểm tra điều kiện khi nhấn nút Confirm
    const handleConfirm = () => {
        const totalShifts = Object.values(selectedShifts).reduce((sum, shifts) => sum + shifts.length, 0);

        if (totalShifts < 5) {
            setErrorMessage('Please register for a minimum of 5 shifts!');
            return;
        }

        if (Object.keys(selectedShifts).length < 6) {
            setErrorMessage('You must fill in all the required information!');
            return;
        }

        setErrorMessage('');
        alert('Registration Successful!');
    };

    return (
        <div className="signupforworkshift_container">
            <div className="header">
                <button className="btn_back">Back <CaretLeft size={20} /></button>
                <h1>Sign Up for Work Shift</h1>
            </div>
            <form className ="form_of_SignUp">
                <div className="form_group">
                    <label Style="color: #733EF5;">Groomer Name:</label>
                    {/* <select>
                        <option>Name</option>
                        <option>Anna</option>
                        <option>Michael</option>
                        <option>John</option>
                    </select> */}
                    <select
                        onChange={(e) => console.log(e.target.value)} // Lưu giá trị khi chọn
                        defaultValue="" className="custom-select"// Giá trị mặc định (placeholder)
                    >
                        <option value="" disabled hidden>
                            Name
                        </option>
                        <option value="Anna">Anna</option>
                        <option value="Michael">Michael</option>
                        <option value="John">John</option>
                    </select>
                </div>
                <div className="form_group_date">
                    <label Style="color: #733EF5;">Date:</label>
                    <span>{weekRange}</span> {/* Hiển thị ngày đầu và cuối tuần */}
                </div>
                <div className="form-group shifts">
                    <label Style="color: #733EF5;">
                        <div className='shift_x'>Shift <span className="note">(Note: Must register for at least 5 shifts):</span></div>
                    </label>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                        <div key={day} className="shift-row">
                            <span>{day}:</span>
                            <label>
                                <input
                                    type="checkbox"
                                    name={`${day}-Morning`}
                                    checked={selectedShifts[day]?.includes('Morning') || false}
                                    onChange={() => handleShiftChange(day, 'Morning')}
                                />
                                Morning
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name={`${day}-Afternoon`}
                                    checked={selectedShifts[day]?.includes('Afternoon') || false}
                                    onChange={() => handleShiftChange(day, 'Afternoon')}
                                />
                                Afternoon
                            </label>
                        </div>
                    ))}
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="button" className="btn_Confirm" onClick={handleConfirm}>
                    <div className='text_button'>Confirm</div>
                </button>
            </form>
        </div>
    );
};

export default SignUpForWorkShift;
