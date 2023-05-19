import React, { useState, useEffect } from 'react';
import Button from "../Components/button"

export default function AlertComponent({ type, message, delay = false, delaytime }) {
    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = (e) => {
        e.target.parentElement.parentElement.classList.add("fadeAlert");

        setTimeout(() => { setShowAlert(false) }, 3000)
    }

    useEffect(() => {
        delay && setTimeout(() => {
            setShowAlert(false);
        }, delaytime)

    })
    return (showAlert && <div className={`alert alert-${type}`}>
        <div className='alert-close'>
            <span className='mr-1'>{message}</span>
            <Button btnClass={"btn-close"} text={""} onClick={closeAlert} />
        </div>
    </div>)
}