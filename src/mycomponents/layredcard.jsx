import React from 'react'
import "./layred.css"
export default function LayredCard() {



    return (
        <div className='layer-container'>


            <div className='layer' id='base'><img src="images/furniture1.jpg" alt="" className='img-fluid' /></div>
            <div className='layer' id="base-upper"><img src="images/furniture1.jpg" alt="" className='img-fluid' /></div>
            <div className='layer' id="top-lower"><img src="images/furniture1.jpg" alt="" className='img-fluid' /></div>
            <div className='layer' id="top"><img src="images/furniture1.jpg" alt="" className='img-fluid' /></div>


        </div>
    )
}