import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ThropyCard({bg, nilai1, nilai2, nilai3, total, name, no, image}) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomId = getRandomInt(1, 70);
    let randomName = getRandomInt(0, 9);
    let profilImage = image ?
        image : `https://i.pravatar.cc/150?img=${randomId}`

    
    const [data, setdata] = useState()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>{
            console.log(res.data);
            setdata(res.data)
        })
        .catch((err)=>{
            console.log(err.response);
        })
        }, [])
    
    return (
        <div>
            <body className={`flex justify-between w-12/12 h-16 mt-2 p-2 rounded-2xl items-center ${bg}`}>
                {data && <>
                <div className="left flex space-x-2 items-center">
                    <div className="numb bg-white w-6 h-6 rounded-full w-6 text-xs items-center flex justify-center">
                        <p>{no}</p>
                    </div>
                    <div className="prof w-8 h-8 rounded-full">
                        <img src={profilImage} alt="prof" className='rounded-full'/>
                    </div>
                    <div className="name">
                        <p>{data[randomName].name}</p>
                    </div>
                </div>
                <div className="right flex space-x-2">
                    <div className="green bg-white rounded-full w-6 h-6 text-center text-green-400">
                        <p>{nilai1}</p>
                    </div>
                    <div className="red bg-white rounded-full w-6 h-6 text-center text-red-400">
                        <p>{nilai2}</p>
                    </div>
                    <div className="dark bg-white rounded-full w-6 h-6 text-center text-black-400">
                        <p>{nilai3}</p>
                    </div>
                    <div className="total text-black-400 font-semibold">
                        <p>{total}</p>
                    </div>
                </div>
                </>}
            </body>
        </div>
    )
}

export default ThropyCard
