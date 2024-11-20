import React, { useState, useEffect } from "react";
import "./ServicePage.css";
import { MagnifyingGlass, CaretLeft, CaretRight, Pencil, Trash } from "@phosphor-icons/react";

const ServicePage = () => {
    const [service, setService] = useState([]);
    const [filteredService, setFilteredService] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const size = 10;

    // Giả lập dữ liệu ban đầu
    useEffect(() => {
        const data = [
            { id: 1, name: "Combo Silver (1),(2)", type: "Combo", pet: "Dog", price: "705,000 VND", weight: "< 2kg"},
            { id: 2, name: "Combo Silver (1),(2)", type: "Combo", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
            { id: 3, name: "Combo Silver (1),(2)", type: "Combo", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
            { id: 4, name: "Combo Silver (1),(2)", type: "Combo", pet: "Dog", price: "705,000 VND", weight: "< 2kg" },
            { id: 5, name: "Bath & Spa (1)", type: "Single", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
            { id: 6, name: "Bath & Spa (1)", type: "Single", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
            { id: 7, name: "Bath & Spa (1)", type: "Single", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
            { id: 8, name: "Bath & Spa (1)", type: "Single", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
            { id: 9, name: "Bath & Spa (1)", type: "Single", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
            { id: 10, name: "Combo Silver (1),(2)", type: "Combo", pet: "Dog", price: "705,000 VND", weight: "< 2kg" },
            { id: 11, name: "Combo Silver (1),(2)", type: "Combo", pet: "Dog", price: "705,000 VND", weight: "< 2kg" },
            { id: 12, name: "Combo Silver (1),(2)", type: "Combo", pet: "Dog", price: "705,000 VND", weight: "< 2kg" },
            { id: 13, name: "Combo Silver (1),(2)", type: "Combo", pet: "Dog", price: "705,000 VND", weight: "< 2kg" },
            { id: 14, name: "Combo Silver (1),(2)", type: "Combo", pet: "Dog", price: "705,000 VND", weight: "< 2kg" },
            { id: 15, name: "Combo Silver (1),(2)", type: "Combo", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
            { id: 16, name: "Combo Silver (1),(2)", type: "Combo", pet: "Cat", price: "705,000 VND", weight: "< 2kg" },
        ];
        setService(data);  // Lưu trữ toàn bộ dữ liệu khách hàng
        setFilteredService(data);
    }, []);
    // Áp dụng bộ lọc
    const totalPages = Math.ceil(filteredService.length / size);

    const currentService = service.slice(currentPage * size, (currentPage + 1) * size);

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
        <div className="service">
            <div className="over_list_ser">
                <div className="find-container">
                    <MagnifyingGlass size={24} className='input_icon_kinh' />
                    <input className="find_text_ser" type="text" />
                </div>

                <button className="button_service">
                    Add Service
                </button>
            </div>
            {/* Bảng danh sách */}
            <table className="service-table">
                <thead>
                    <tr Style="color: #733EF5;">
                        <th>Name</th>
                        <th>Type</th>
                        <th>Pet</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentService.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.pet}</td>
                            <td>{item.weight}</td>
                            <td>{item.price}</td>
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

