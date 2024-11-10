import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const MyPieChart = () => {
    const data = [
        { name: 'Cat', value: 400 },
        { name: 'Dog', value: 300 },
        // { name: 'Sản phẩm C', value: 300 },
        // { name: 'Sản phẩm D', value: 200 },
    ];
    const COLORS = ['#2D60CC', '#FF8E6E', '#FFBB28', '#FF8042'];
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default MyPieChart;
