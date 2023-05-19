import React, { useState } from 'react';
import Title from '../Components/title'
import "./like.css";
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'

export default function LikePhotoApp() {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);
    const toggleLike = () => {
        if (!like) {
            setLike(true);
            setCount(count + 1)
        } else {
            setLike(false);
            setCount(count - 1)
        }
    }

    return (
        <div className='container'>
            <Title text={'Like Photo App'}>  Like PhotoApp</Title>
            <div>
                <Title classes={"subtitle"} text={`Likes ${count}`}></Title>
            </div>
            <div className='card card-dark  border-dark m-auto mt-5 shadow-sm' onDoubleClick={toggleLike} style={{ width: 300, cursor: "Pointer" }}>
                <div className="card-header fs-xl">
                    <AiFillSmile className='me-3' />
                    <small>Furniture</small>
                </div>
                <img src="images/furniture1.jpg" alt="img" style={{ height: "fit-content" }} />
                <div className='card-footer fs-xl d-flex' style={{ justifyContent: "space-between" }}>
                    <AiOutlineComment />
                    {like ? (<AiFillHeart className='text-danger' onClick={toggleLike} />) : (<AiOutlineHeart onClick={toggleLike} />)}

                </div>
            </div>

        </div>

    )
}