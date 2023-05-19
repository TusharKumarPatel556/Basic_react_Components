import react, { useState } from 'react'
import Title from '../Components/title'
import "./signature.css"

export default function EsignatureApp() {
    const [name, setName] = useState();
    const [date, setDate] = useState();

    const handleDatechange = (e) => {
        setDate(e.target.value)
    }
    const handleNameChange = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }
    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0"

    };

    // document.body.style.background = "red";
    return (
        <div className='container text-container'>
            <Title classes={"title"} text={name} />
            <Title classes={"main-title"} text={!date ? "Dob" : date} />
            <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eos dolores nihil, omnis ipsam corrupti facilis asperiores natus neque praesentium ipsa maxime alias! Dolorem molestiae est blanditiis vel. Assumenda, quos consequatur. Eum culpa natus, consequuntur tempora commodi praesentium provident porro. Facilis nemo mollitia vitae eligendi odio veniam quod tempore nihil natus repellat ullam cupiditate dolores porro cum asperiores repudiandae molestiae dicta, ad nulla nam obcaecati cumque illum omnis dolor! Perferendis voluptatibus et magni optio, accusantium maxime similique natus ex, reiciendis, provident autem in aliquid officiis nihil rem? Beatae asperiores perferendis, necessitatibus omnis vel dignissimos aspernatur? Quia cum distinctio nobis magnam.
            </p>

            <footer className='d-flex' style={{ justifyContent: "space-between", position: "relative", top: "40vh" }}>
                <input type="date" className='date' value={date} style={inputStyle} onChange={handleDatechange} />
                <input type="text" className='title_input' value={name} style={inputStyle} onChange={handleNameChange} />

            </footer>
        </div>
    )
}