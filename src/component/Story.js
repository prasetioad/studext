import React from 'react'
import ProfilIcon from './profilIcon'
import './style.css'
import HorizontalScroll from 'react-scroll-horizontal'

function Index() {
    
    return (
        <div>
            <body className='flex flex-col flex-star w-12/12 h-36 bg-gray-100 m-3  px-4 shadow-lg rounded-3xl overflow-hidden'>
                <div className="text-xl font-semibold pt-2">
                    <p>Story</p>
                </div>
                <div className="flex space-x-5 pt-2  w-13/12 h-48 overflow-x-auto ">
                    <HorizontalScroll className='scroll' reverseScroll={true} > 
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                        <ProfilIcon />
                    </HorizontalScroll>
                </div>
            </body>
        </div>
    )
}

export default Index
