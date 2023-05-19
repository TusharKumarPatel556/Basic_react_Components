import React, { useState, useEffect } from 'react'
import "./testimonial.css";
import Title from "../Components/title";
import Button from "../Components/button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function Testimonial() {

    const handleClick = () => {
        console.log("My Click")

    }
    const [testimonials, setTestimonials] = useState();
    const [items, setItems] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
            .then((response) => response.json())
            .then((json) => setItems(json))
    }, [testimonials])
    return (
        <div className='container'>
            <Title text={"Testimonials"}></Title>
            <div className='d-flex '>
                <Button text={"Posts"}
                    icon={<BsFillFileEarmarkPostFill />}
                    btnClass={"btn-info btn-lg m-2"}
                    onClick={() => setTestimonials("Posts")}
                ></Button>
                <Button text={"Users"}
                    icon={<FaUserAlt />} onClick={() => setTestimonials("Users")}
                    btnClass={"btn-info btn-lg m-2"}></Button>
                <Button text={"Comments"}
                    icon={<BiCommentDetail />} onClick={() => setTestimonials("Comments")}
                    btnClass={"btn-info btn-lg m-2"}></Button>


            </div>
            <Title classes={"subtitle"} text={!testimonials ? "select from above" : testimonials}></Title>
            <div>
                {!items ? null : items.map((item) => {
                    return (
                        <div className='card card-primary mb-2' key={item.id}>
                            {item.name && <h2 className='card-header'>{item.name}</h2>}
                            <div className='card-body'>
                                <h4>{item.title}</h4>
                                <p>{item.body}</p>
                                {item.email && (<small className='card-footer'>{item.email}</small>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 