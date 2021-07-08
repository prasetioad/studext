import React, { useEffect, useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import ThropyCard from './thropyCard'
import './style.css'
import axios from 'axios'

function Peringkat() {

    return (
        <div>
            <body className='flex flex-col flex-star w-12/12 h-96 bg-gray-100 m-3  shadow-lg rounded-3xl overflow-hidden'>
                <div className="flex flex-row justify-between text-xl font-semibold  pl-3 pt-2 ">
                    <div className="left ">
                        <div className="peringkat">
                            <p>Peringkat</p>
                        </div>
                        <div className="hasilAkhir text-xs font-extralight pt-2">
                            <p>Hasil akhir perolehan nilai try out</p>
                        </div>
                        <div className="unduh text-sm font-semibold flex space-x-2 mt-2 text-blue-400">
                            <img src="./asset/Download.png" alt="" />
                            <a href="">
                                <p>Unduh .CSV</p>
                            </a>
                        </div>
                    </div>
                    <div className="piala">
                        <img src="./asset/001-trophy 1.png" alt="thropy" />
                    </div>
                </div>
                <div className="no-scrollbar flex flex-col justify-star space-y-0 w-12/12 h-64 overflow-y-auto p-1">
                       <ThropyCard  bg='bg-gradient-to-r from-yellow-400' nilai1='40' nilai2='0' nilai3='0' total='100' no='1'/>
                       <ThropyCard  bg='bg-gradient-to-r from-gray-400' nilai1='39' nilai2='1' nilai3='0' total='98' no='2'/>
                       <ThropyCard  bg={`bg-gradient-to-r from-red-200`} nilai1='35' nilai2='3' nilai3='2' total='90' no='3'/>
                       <ThropyCard  bg='bg-gradient-to-r from-warmGray-400' nilai1='30' nilai2='5' nilai3='5' total='80' no='4'/>
                       <ThropyCard  bg='bg-gradient-to-r from-warmGray-400' nilai1='28' nilai2='11' nilai3='0' total='78' no='5'/>
                </div>
            </body>
        </div>
    )
}

export default Peringkat
