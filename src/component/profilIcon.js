import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ProfilIcon({ iconSize, storyBorder, image}) {

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
        <div className="storyContent w-16 h-18 mr-2 cursor-pointer " data-toggle="modal" data-target=".bd-example-modal-lg" >
            <div className="rounded-full w-16 h-16 bg-blue-400 stroke-200 overflow-hidden border-2 border-blue-400">
                <img src={profilImage} alt="image" className='object-cover' />
            </div>
            <div className="h-6 w-full text-center overflow-hidden" style={true ? {display: 'block'} : {display: 'none'}}>
                {data && 
                <p>{data[randomName].name}</p>
                }
            </div>
            {/* <div className="modal w-screen h-screen text-center"> */}
                <div className="modal fade bd-example-modal-lg w-12/12 h-78 absolute" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" >
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content absolute w-12/12 h-full absolute">
                        <img src={profilImage} alt="modal" className=''/>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default ProfilIcon
