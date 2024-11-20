import React, { useState, useEffect } from "react";
import "./StaffPage.css";
import { MagnifyingGlass, CaretLeft, CaretRight, Pencil, Trash } from "@phosphor-icons/react";

const ServicePage = () => {
    const [staff, setStaff] = useState([]);
    const [filteredStaff, setFilteredStaff] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const size = 10;

    // Giả lập dữ liệu ban đầu
    useEffect(() => {
        const data = [
            { id: 1, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 2, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 3, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 4, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 5, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 6, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 7, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 8, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" }, { id: 1, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 9, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 10, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 11, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" }, { id: 1, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 12, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 13, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
            { id: 14, name: "Vy Le", totalshift: "13", phonenumber: "0826967279", address: "126/21B Tran Phu Phuong 4 TPVL", totalappointment: "30" },
        ];
        setStaff(data);  // Lưu trữ toàn bộ dữ liệu khách hàng
        setFilteredStaff(data);
    }, []);
    // Áp dụng bộ lọc
    const totalPages = Math.ceil(filteredStaff.length / size);

    const currentStaff = staff.slice(currentPage * size, (currentPage + 1) * size);

    // Chuyển trang
    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };
    return (
        <div className="staff">
            <div className="over_list_staff">
                <div className="find-container">
                    <MagnifyingGlass size={24} className='input_icon_kinh' />
                    <input className="find_text_staff" type="text" />
                </div>

                {/* <button className="button_staff">
                    Add Service
                </button> */}
            </div>
            {/* Bảng danh sách */}
            <table className="staff-table">
                <thead>
                    <tr Style="color: #733EF5;">
                        <th>Name</th>
                        <th>Totoal Shifts</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Total Appointments</th>
                    </tr>
                </thead>
                <tbody>
                    {currentStaff.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.totalshift}</td>
                            <td>{item.phonenumber}</td>
                            <td>{item.address}</td>
                            <td>{item.totalappointments}</td>
                            <td Style="color: #733EF5;">< Pencil size={20} /> <Trash size={20} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Phân trang */}
            <div className="pagination">
                <button className="hidden_border" onClick={goToPreviousPage} >
                    <div className='back_next'>
                        <CaretLeft size={24} /> Back
                    </div>
                </button>
                <button className="hidden_border" onClick={goToNextPage} >
                    <div className='back_next'>
                        Next <CaretRight size={24} />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ServicePage;

