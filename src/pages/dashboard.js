import React from 'react'
import Navbar from '../component/Navbar'
import CoursePerview from '../component/coursePerview'
import Statistic from '../component/Statistic'
import Story from '../component/Story'
import Peringkat from '../component/peringkat'
import './style.css'


function Index() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-row w-full dashboard">
                <div className="left w-9/12 ">
                    <Story />
                    <Statistic />
                </div>
                <div className="right w-4/12 ">
                    <Peringkat />
                </div>
            </div>
            <CoursePerview />
        </div>
    )
}

export default Index
