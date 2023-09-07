import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        name: "Month 1",
        uv: 0,
    },
    {
        name: "Month 2",
        uv: 1000,
    },
    {
        name: "Month 3",
        uv: 800,
    },
    {
        name: "Month 4",
        uv: 1000,
    },
    {
        name: "Month 5",
        uv: 1500,
    },
    {
        name: "Month 6",
        uv: 2000,
    },
    {
        name: "Month 7",
        uv: 1900,
    },
    {
        name: "Month 8",
        uv: 2390,
    },
    {
        name: "Month 9",
        uv: 2300,
    },
    {
        name: "Month 10",
        uv: 2590,
    },
    {
        name: "Month 11",
        uv: 3390,
    },
    {
        name: "Month 12",
        uv: 3590,
    }
];

const Statistics = () => {
    return (
        <div style={{marginBottom: '150px'}}>
            <h2 className='section-title'>Chart shows the improvement of skills of users gaining through us</h2>
            <AreaChart style={{marginRight: 'auto', marginLeft: 'auto'}}
                width={425}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#9873FF" fill="#7E90FE" />
            </AreaChart>
        </div>
    );
};

export default Statistics;