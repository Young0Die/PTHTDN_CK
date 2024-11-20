import React, { useState, useEffect } from "react";
import "./CustomerPage.css";
import { MagnifyingGlass, CaretLeft, CaretRight } from "@phosphor-icons/react";

const CustomerPage = () => {
    const [customer, setCustomer] = useState([]);
    const [filteredCustomer, setFilteredCustomer] = useState([]);  
    const [currentPage, setCurrentPage] = useState(0); 
    const size = 10;
    
    // Giả lập dữ liệu ban đầu
    useEffect(() => {
        const data = [
            { id: 1, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 2, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 3, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 4, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 5, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 6, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 7, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 8, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 9, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 10, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 11, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 12, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 13, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 14, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 15, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
            { id: 16, name: "Anna", numberPhone: "0821332328", address: "290G/33S Duong Ba Trac Phuong 1 Quan 8", price: "705,000 VND" },
        ];
        setCustomer(data);  // Lưu trữ toàn bộ dữ liệu khách hàng
        setFilteredCustomer(data); 
    }, []);
    // Áp dụng bộ lọc
    const totalPages = Math.ceil(filteredCustomer.length / size);

    const currentAppointments = customer.slice(currentPage * size, (currentPage + 1) * size);

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
        <div className="customer">
            <div className="over_list_cus">
                <div className="find-container">
                    <MagnifyingGlass size={24} className='input_icon_kinh' />
                    <input className="find_text_cus" type="text" />
                </div>
                
                <button className="button_customer">
                    Create Customer
                </button>
            </div>
            {/* Bảng danh sách */}
            <table className="customer-table">
                <thead>
                    <tr Style="color: #733EF5;">
                        <th>Name</th>
                        <th>Id</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Total Prices</th>
                    </tr>
                </thead>
                <tbody>
                    {currentAppointments.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.numberPhone}</td>
                            <td>{item.address}</td>
                            <td>{item.price}</td>
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

export default CustomerPage;

