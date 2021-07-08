
import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

export default function PositiveChart() {

    const data = [
        {
            name: '1 Jan',
            uv: 40,
            pv: -24,
            amt: 24,
        },
        {
            name: '2 Jan',
            uv: 30,
            pv: -13,
            amt: 22,
        },
        {
            name: '3 Jan',
            uv: 20,
            pv: -38,
            amt: 22,
        },
        {
            name: '4 Jan',
            uv: 27,
            pv: -18,
            amt: 20,
        },
        {
            name: '5 Jan',
            uv: 18,
            pv: -48,
            amt: 21,
        },
        {
            name: '6 Jan',
            uv: 23,
            pv: -38,
            amt: 25,
        },
        {
            name: '7 Jan',
            uv: 34,
            pv: -12,
            amt: 21,
        },
        {
            name: '8 Jan',
            uv: 14,
            pv: -20,
            amt: 21,
        },
        {
            name: '9 Jan',
            uv: 23,
            pv: -23,
            amt: 21,
        },
        {
            name: '10 Jan',
            uv: 43,
            pv: -13,
            amt: 21,
        },
        {
            name: '11 Jan',
            uv: 34,
            pv: -43,
            amt: 21,
        },
        {
            name: '12 Jan',
            uv: 24,
            pv: -43,
            amt: 21,
        },
        {
            name: '13 Jan',
            uv: 14,
            pv: -13,
            amt: 21,
        },
        {
            name: '14 Jan',
            uv: 21,
            pv: -23,
            amt: 21,
        },
        {
            name: '15 Jan',
            uv: 24,
            pv: -43,
            amt: 21,
        },
        {
            name: '16 Jan',
            uv: 14,
            pv: -13,
            amt: 21,
        },
        {
            name: '17 Jan',
            uv: 21,
            pv: -23,
            amt: 21,
        },
    ];
    return (
        <div className='border-2 h-56 '>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data = {data}
                    stackOffset="sign"
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="pv" fill="#DB0038" stackId="stack" barSize={10} />
                    <Bar dataKey="uv" fill="#008FFF" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
