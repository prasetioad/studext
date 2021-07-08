import React from 'react'

function Product() {
    return (
        <div>
            <body className='flex flex-col flex-star w-96 h-48 bg-gray-100 m-1 border-2  px-4 shadow md:shadow-lg rounded-3xl overflow-hidden'>
                <div className="flex justify-between text-xl font-semibold pt-3 w-12/12 h-30">
                    <div className="thumbnail w-5/12">
                        <img src="https://picsum.photos/200" alt="image" className="rounded-3xl w-10/12 h-10/12"/>
                    </div>
                    <div className="price w-7/12">
                        <div className="priceHead flex justify-between">
                            <div className="title text-md">
                                <p>TOEFL</p>
                            </div>
                            <div className="iconDetil">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                        <div className="star">
                            <img src="./asset/Frame 739.png" alt="star" />
                        </div>
                        <div className="teacher flex justify-star space-x-2 text-xs pt-2 text-gray-600">
                            <div className="tlogo ">
                                <img src="./asset/Rectangle 367.png " alt="logo" />
                            </div>
                            <div className="tlogo">
                                <p>By Course Hero</p>
                            </div>
                        </div>
                        <div className="teacher flex justify-star space-x-2 text-xs pt-2 text-gray-600">
                            <div className="tlogo ">
                                <img src="./asset/Profile1.png" alt="logo" />
                            </div>
                            <div className="tlogo">
                                <p>203 Pelajar, 4 Guru</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chart text-xs line-through text-gray-600 text-right" >
                    <p>Rp 2.000.000</p>
                </div>
                <div className="footerCard flex justify-between ">
                    <div className="cardDate text-xs bg-red-200 rounded-full p-1.5 text-red-600">
                        <p>Mulai: 17 Agustus 2020</p>
                    </div>
                    <div className="cardPrice text-xl text-green-400">
                        <p>Rp 1.500.000</p>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Product
