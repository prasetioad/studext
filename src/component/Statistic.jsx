import React from 'react'
import Chart from './chart'
import Example from './positiveChart'

function Statistic() {
    return (
        <div>
            <body className='flex flex-col flex-star w-12/12 h-56 bg-gray-100 m-3  px-4 shadow-lg rounded-3xl overflow-hidden'>
                <div className="text-xl font-semibold pt-2">
                    <p>Statistic</p>
                </div>
                <div className="chart">
                    <Example />
                </div>
            </body>
        </div>
    )
}

export default Statistic
