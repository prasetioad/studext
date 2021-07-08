import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Product from './product'

function CoursePerview() {
    return (
        <div>
            <body className='flex flex-col flex-star w-12/12 h-68 bg-gray-100 m-3  px-4 shadow-lg rounded-3xl overflow-hidden'>
                <div className="text-xl font-semibold pt-2">
                    <p>Course Preview</p>
                </div>
                <div className="flex space-x-5 pt-2  w-13/12 h-56 overflow-x-auto ">
                    <HorizontalScroll className='scroll' reverseScroll={true} > 
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </HorizontalScroll>
                </div>
            </body>
        </div>
    )
}

export default CoursePerview
