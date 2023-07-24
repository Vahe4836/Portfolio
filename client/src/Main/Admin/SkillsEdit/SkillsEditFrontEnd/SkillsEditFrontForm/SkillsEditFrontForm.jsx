import { useState } from "react";



export default function SkillsEditFrontForm({ setFrontEndData }) {

    const [displayFormBool, setDisplayFormBool] = useState(false);

    const [backgroundColor, setBackgroundColor] = useState("");
    const [percentage, setPercentage] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [alt, setAlt] = useState("");


    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }


    async function SendMessage(evt) {

        evt.preventDefault();

        const data = {
            backgroundColor,
            percentage,
            name,
            img,
            alt
        }

        if (
            backgroundColor &&
            percentage &&
            name &&
            img &&
            alt
        ) {

            await fetch("/db/admin/front/data/import", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then((stream) => stream.json())
                .then((data) => {
                    setFrontEndData(data);
                })


            setBackgroundColor("");
            setPercentage("")
            setName("");
            setImg("");
            setAlt("");

        }

    }



    return (
        <>

            <div className="display_form_button_div">
                <button onClick={(evt) => {
                    evt.preventDefault();
                    setDisplayFormBool(!displayFormBool);
                }}
                    className="display_form_button"
                >{displayFormBool ? "Close Front-End skill form" : "Open Front-End skill form"}</button>
            </div>


            <div className='create_skill_form' style={{ display: `${displayFormBool ? "block" : "none"}` }}>
                <form className="edit_form">

                    <input
                        type="text"
                        name='name'
                        placeholder='Name'
                        className="form_edit_input"
                        value={name}
                        onChange={handleChange(setName)}
                    />

                    <input
                        type="text"
                        name='percentage'
                        placeholder='Percentage'
                        className="form_edit_input"
                        value={percentage}
                        onChange={handleChange(setPercentage)}
                    />

                    <input
                        type="text"
                        name='backgroundColor'
                        placeholder='Background color'
                        className="form_edit_input"
                        value={backgroundColor}
                        onChange={handleChange(setBackgroundColor)}
                    />

                    <input
                        type="text"
                        name='image'
                        placeholder='Image url'
                        className="form_edit_input"
                        value={img}
                        onChange={handleChange(setImg)}
                    />

                    <input
                        type="text"
                        name='alt'
                        placeholder='Image alt'
                        className="form_edit_input"
                        value={alt}
                        onChange={handleChange(setAlt)}
                    />

                    <button
                        className='form_edit_button'
                        onClick={(evt) => { SendMessage(evt) }}
                    >Create</button>
                </form>
            </div>
        </>
    )
}