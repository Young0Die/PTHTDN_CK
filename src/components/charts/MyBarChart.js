import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyBarChart = () => {
    const data = [
        { name: 'Tháng 1', doanhThu: 4000 },
        { name: 'Tháng 2', doanhThu: 3000 },
        { name: 'Tháng 3', doanhThu: 2000 },
        { name: 'Tháng 4', doanhThu: 2780 },
        { name: 'Tháng 5', doanhThu: 1890 },
        { name: 'Tháng 6', doanhThu: 1890 },
        { name: 'Tháng 7', doanhThu: 1143 },
        { name: 'Tháng 8', doanhThu: 2930 },
        { name: 'Tháng 9', doanhThu: 1490 },
        { name: 'Tháng 10', doanhThu: 3890 },
        { name: 'Tháng 11', doanhThu: 2390 },
        { name: 'Tháng 12', doanhThu: 1313 },
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="doanhThu" fill="#92816C" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyBarChart;
