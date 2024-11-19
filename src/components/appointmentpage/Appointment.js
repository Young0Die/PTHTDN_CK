import React, { useState, useEffect } from "react";
import "./Appointment.css";
import { MagnifyingGlass, CaretLeft, CaretRight } from "@phosphor-icons/react";

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [filters, setFilters] = useState({ groomer: null, pet: null });
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
       const [selectedDropdown, setSelectedDropdown] = useState("Select Filter");
    const size = 10;
    const getSelectClass = (status) => {
        switch (status) {
            case "Pending":
                return "select-pending";
            case "In Progress":
                return "select-in-progress";
            case "Completed":
                return "select-completed";
            case "Cancel":
                return "select-cancel";
            default:
                return "";
        }
    };
    // Giả lập dữ liệu ban đầu
    useEffect(() => {
        const data = [
            { id: 1, name: "Anna", pet: "Dog", date: "2023-09-23", time: "14:00", price: "705,000 VND", status: "Pending", nameCus: "Le Vy" },
            { id: 2, name: "Yena", pet: "Cat", date: "2023-09-23", time: "09:30", price: "130,000 VND", status: "In Progress", nameCus: "Le Vy" },
            { id: 3, name: "Michael", pet: "Dog", date: "2023-09-23", time: "14:00", price: "130,000 VND", status: "Completed", nameCus: "Le Vy" },
            { id: 4, name: "John", pet: "Dog", date: "2023-09-23", time: "09:30", price: "130,000 VND", status: "Cancel", nameCus: "Dang Thang" },
            { id: 5, name: "Sera", pet: "Cat", date: "2023-09-23", time: "14:00", price: "130,000 VND", status: "Pending", nameCus: "Phan Chi" },
            { id: 6, name: "Anna", pet: "Cat", date: "2023-09-25", time: "10:00", price: "150,000 VND", status: "Completed", nameCus: "Huynh Huy" },
            { id: 7, name: "Michael", pet: "Cat", date: "2023-09-14", time: "10:00", price: "150,000 VND", status: "Pending", nameCus: "Tran Tuong" },
            { id: 8, name: "Anna", pet: "Cat", date: "2023-09-24", time: "10:00", price: "150,000 VND", status: "Completed", nameCus: "Le Vy" },
            { id: 9, name: "Sera", pet: "Cat", date: "2023-09-24", time: "10:00", price: "150,000 VND", status: "In Progress", nameCus: "Dang Thang" },
            { id: 10, name: "Michael", pet: "Cat", date: "2023-05-24", time: "10:00", price: "150,000 VND", status: "Pending", nameCus: "Nguyen An" },
            { id: 11, name: "John", pet: "Cat", date: "2023-09-26", time: "10:00", price: "150,000 VND", status: "Completed", nameCus: "Le Vy" },
            { id: 12, name: "Sera", pet: "Dog", date: "2023-03-14", time: "10:00", price: "150,000 VND", status: "Cancel", nameCus: "Huynh Huy" },
            { id: 13, name: "Anna", pet: "Cat", date: "2023-01-13", time: "10:00", price: "150,000 VND", status: "Pending", nameCus: "Phan Chi" },
            { id: 14, name: "John", pet: "Dog", date: "2023-05-24", time: "10:00", price: "150,000 VND", status: "Pending", nameCus: "Le Vy" },
            { id: 15, name: "Yena", pet: "Cat", date: "2023-12-31", time: "10:00", price: "150,000 VND", status: "Cancel", nameCus: "Tran Tuong" },
        ];
        setAppointments(data);
        setFilteredAppointments(data);
    }, []);
    // Áp dụng bộ lọc
    useEffect(() => {
        let filtered = [...appointments];
        if (filters.groomer) {
            filtered = filtered.filter((item) => item.name === filters.groomer);
        }
        if (filters.pet) {
            filtered = filtered.filter((item) => item.pet === filters.pet);
        }
        setFilteredAppointments(filtered.slice(currentPage * size, (currentPage + 1) * size));
    }, [filters, appointments, currentPage]);

    // Chuyển trạng thái
    const handleStatusChange = (id, newStatus) => {
        const updatedAppointments = appointments.map((item) =>
            item.id === id ? { ...item, status: newStatus } : item
        );
        setAppointments(updatedAppointments);
    };

    // Xử lý thay đổi bộ lọc
    const handleFilter = (type, value) => {
        setFilters((prev) => ({ ...prev, [type]: value }));
        setShowFilterOptions(false);
        setSelectedDropdown(value); // Cập nhật dropdown theo lựa chọn
    };

    // Xoá bộ lọc
    const clearFilter = () => {
        setFilters({ groomer: null, pet: null });
        setSelectedDropdown("Select Filter"); // Reset dropdown
    };

    return (
        <div className="appointments">
            <div className = "over_list">
                <div className="find-container">
                    <MagnifyingGlass size={24} className='input_icon_kinh' />
                    <input className ="find_text" type="text" />
                </div>
                {/* Bộ lọc */}
                <div className="fil_create-container">
                    {/* Dropdown Filter */}
                    <div className="dropdown">
                        <button className="dropbtn">{selectedDropdown}</button>
                        <div className="dropdown-content">
                            <h4>By Groomer</h4>
                            {["Anna", "Yena", "Michael", "John", "Sera"].map((name) => (
                                <div key={name} onClick={() => handleFilter("groomer", name)}>
                                    {name}
                                </div>
                            ))}
                            <h4>By Pet</h4>
                            {["Dog", "Cat"].map((pet) => (
                                <div key={pet} onClick={() => handleFilter("pet", pet)}>
                                    {pet}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="clear-filter-btn" onClick={clearFilter}>
                        Clear Filter
                    </button>
                </div>
            </div>
            {/* Bảng danh sách */}
            <table className="appointments-table">
                <thead>
                    <tr Style= "color: #733EF5;">
                        <th>Name</th>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Timing</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAppointments.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nameCus}</td>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.price}</td>
                            <td>{item.time}</td>
                            <td >
                                <select 
                                    value={item.status}
                                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                                    className={`custom-select ${getSelectClass(item.status)}`} // Áp dụng class tùy thuộc vào trạng thái 
                                >
                                    <option Style= "color: #DDD01C;" value="Pending">Pending</option>
                                    <option Style="color: #2A00BB;" value="In Progress">In Progress</option>
                                    <option Style="color: #26FF6F;" value="Completed">Completed</option>
                                    <option Style="color: #FF382B;" value="Cancel">Cancel</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Phân trang */}
            <div className="pagination"> 
                <button className="hidden_border" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}><div className='back_next'><CaretLeft size={24} />Back</div></button>
                <button className="hidden_border" onClick={() => setCurrentPage((prev) => prev + 1)}><div className='back_next'>Next<CaretRight size={24} /></div> </button>
            </div>
        </div>
    );
};

export default Appointment;

