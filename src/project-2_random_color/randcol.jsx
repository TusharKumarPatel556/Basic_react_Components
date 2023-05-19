import React from 'react'
import "./randcol.css"
import Title from "../Components/title"

export default function RandomizeColor() {


    function handleClick(event) {

        let body = document.querySelector("body")
        body.style.background = getRandomcolor();
        event.target.style.backgroundColor = getRandomcolor();
        localStorage.setItem("color", getRandomcolor())
    }
    function handlesecClick(event) {
        let body = document.querySelector("body")
        body.style.background = getRandomcolor();
        event.target.style.backgroundColor = getRandomcolor();
    }
    function handlethirdClick(event) {
        let body = document.querySelector("body")
        body.style.background = getRandomcolor();
        event.target.style.backgroundColor = getRandomcolor();
    }
    function handlefourthClick(event) {
        let body = document.querySelector("body")
        body.style.background = getRandomcolor();
        event.target.style.backgroundColor = getRandomcolor();
    }


    function getRandomcolor() {
        let letters = "0123456789ABCDEF";
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className='container'>
            <div>
                <Title text={"Randomize Color"} classes={"mb-4"} />
            </div>
            <div className='d-flex '>

                <button className='btn btn-danger m-2' onClick={(event) => handleClick(event)}>Click Me</button>
                <button className='btn btn-success m-2' onClick={(event) => handlesecClick(event)}>Click Me</button>
                <button className='btn btn-primary m-2' onClick={(event) => handlethirdClick(event)}>Click Me</button>
                <button className='btn btn-warning m-2' onClick={(event) => handlefourthClick(event)}>Click Me</button>
            </div>
        </div>
    )
}