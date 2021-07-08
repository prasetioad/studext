import React from 'react'
import './style.css'

function Index() {
    return (
        <div>
            <nav class=" flex justify-center space-x-10 items-center  px-20 h-20 shadow-md dekstop  ">
                <div className="logo flex flex-initial cursor-pointer focus:text-blue-600">
                    <img src="./asset/logo studext 1.png" alt="logo" />
                </div>
                <div className="search flex flex-grow w-16 h-10 border-2  rounded-full bg-gray-200 items-center px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 stroke-current" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <input type="search" placeholder='Search...' className='w-100 outline-none rounded-full bg-gray-200 px-2' />
                </div>
                <a href='#' className='text-black-600 visited:text-blue-600'>
                    <div className="home flex flex-initial cursor-pointer focus:text-blue-600">
                        <div className="icon">
                            <img src="./asset/Union.png" alt="" />
                        </div>
                        <div className="item">
                            <p>Home</p>
                        </div>
                    </div>
                </a>
                <a href='#' className='text-black-600 visited:text-blue-600'>
                    <div className="myCourse flex flex-initial cursor-pointer focus:text-blue-600">
                        <div className="icon">
                            <img src="./asset/My Own.png" alt="" />
                        </div>
                        <div className="item">
                            <p>My Course</p>
                        </div>
                    </div>
                </a>
                <a href='#' className='text-black-600 visited:text-blue-600'>
                    <div className="dashboard flex flex-initial cursor-pointer focus:text-blue-600">
                        <div className="icon">
                            <img src="./asset/Report.png" alt="" />
                        </div>
                        <div className="item">
                            <p>Dashboard</p>
                        </div>
                    </div>
                </a>
                <a href='#' className='text-black-600 visited:text-blue-600'>
                    <div className="chat flex flex-initial cursor-pointer focus:text-blue-600">
                        <div className="icon">
                            <img src="./asset/Chat.png" alt="" />
                        </div>
                        <div className="item">
                            <p>Chat</p>
                        </div>
                    </div>
                </a>
                <a href='#' className='text-black-600 visited:text-blue-600'>
                    <div className="notif flex flex-initial cursor-pointer focus:text-blue-600">
                        <div className="icon">
                            <img src="./asset/Notification.png" alt="" />
                        </div>
                        <div className="item">
                            <p>Notification</p>
                        </div>
                    </div>
                </a>
                <a href='#' className='text-black-600 visited:text-blue-600'>
                    <div className="profile flex flex-initial cursor-pointer focus:text-blue-600">
                        <div className="icon">
                            <img src="./asset/Profile.png" alt="" />
                        </div>
                        <div className="item">
                            <p>Profile</p>
                        </div>
                    </div>
                </a>
            </nav>
            <div className="pos-f-t mobile p-1 flex-col">
                <nav className="flex justify-between navbar navbar-white bg-white text-center w-12/12">
                    <div className=" flex items-center space-x-4 w-54">
                        <div className="logo flex flex-initial cursor-pointer focus:text-blue-600 w-16 mr-2">
                            <img src="./asset/logo studext 1.png" alt="logo" />
                        </div>
                        <div className="search flex flex-grow w-24 h-8 border-2  rounded-full bg-gray-200 items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 stroke-current" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                            <input type="search" placeholder='Search...' className='w-10/12 outline-none rounded-full bg-gray-200 px-2' />
                        </div>
                    </div>
                    <div className='text-white flex'>
                        <button className="navbar-toggler text-dark" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </nav>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-2 text-white flex flex-col space-y-2">
                        <a href='#' className='text-white-400 visited:text-blue-600 ' >
                            <div className="home flex flex-initial  cursor-pointer focus:text-blue-600  ">
                                <div className="icon pr-2">
                                    <img src="./asset/Union.png" alt="" />
                                </div>
                                <div className="item">
                                    <p>Home</p>
                                </div>
                            </div>
                        </a>
                        <a href='#' className='text-white-400 visited:text-blue-600'>
                            <div className="myCourse flex flex-initial  cursor-pointer focus:text-blue-600">
                                <div className="icon pr-2">
                                    <img src="./asset/My Own.png" alt="" />
                                </div>
                                <div className="item">
                                    <p>My Course</p>
                                </div>
                            </div>
                        </a>
                        <a href='#' className='text-white-400 visited:text-blue-600  '>
                            <div className="flex flex-row cursor-pointer focus:text-blue-600  dashboardd ">
                                <div className="icon pr-2 ">
                                    <img src="./asset/Report.png" alt="" />
                                </div>
                                <div className="item">
                                    <p>Dashboard</p>
                                </div>
                            </div>
                        </a>
                        <a href='#' className='text-white-400 visited:text-blue-600'>
                            <div className="chat flex flex-initial  cursor-pointer focus:text-blue-600">
                                <div className="icon pr-2">
                                    <img src="./asset/Chat.png" alt="" />
                                </div>
                                <div className="item">
                                    <p>Chat</p>
                                </div>
                            </div>
                        </a>
                        <a href='#' className='text-white-400 visited:text-blue-600'>
                            <div className="notif flex flex-initial  cursor-pointer focus:text-blue-600">
                                <div className="icon pr-2">
                                    <img src="./asset/Notification.png" alt="" />
                                </div>
                                <div className="item">
                                    <p>Notification</p>
                                </div>
                            </div>
                        </a>
                        <a href='#' className='text-white-400 visited:text-blue-600'>
                            <div className="profile flex flex-initial  cursor-pointer focus:text-blue-600">
                                <div className="icon pr-2">
                                    <img src="./asset/Profile.png" alt="" />
                                </div>
                                <div className="item">
                                    <p>Profile</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
