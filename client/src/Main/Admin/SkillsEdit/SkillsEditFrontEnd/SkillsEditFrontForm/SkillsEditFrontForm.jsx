import { useState } from "react";




export default function SkillsEditFrontForm({ setFrontEndData }) {

    const [displayFormBool, setDisplayFormBool] = useState(false);

    const [name, setName] = useState("");
    const [percentage, setPercentage] = useState("");
    const [bgcolor, setBgColor] = useState("");
    const [image, setImage] = useState("");
    const [alt, setAlt] = useState("");

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }


    async function SendMessage(evt) {

        evt.preventDefault();

        const data = {
            name: name,
            percentage: percentage,
            backgroundColor: bgcolor,
            img: image,
            alt: alt
        }

        if (
            name &&
            percentage &&
            bgcolor &&
            image &&
            alt
        ) {

            await fetch("/db/admin/front/data/import", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            await fetch("/db/admin/front/data/export")
                .then((stream) => stream.json())
                .then((data) => {
                    setFrontEndData(data);
                })

            setName("");
            setPercentage("")
            setBgColor("");
            setImage("");
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


            <div className='create_front_skill_form' style={{ display: `${displayFormBool ? "block" : "none"}` }}>
                <form className="front_edit_form">

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
                        value={bgcolor}
                        onChange={handleChange(setBgColor)}
                    />

                    <input
                        type="text"
                        name='image'
                        placeholder='Image url'
                        className="form_edit_input"
                        value={image}
                        onChange={handleChange(setImage)}
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