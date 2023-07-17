



export default function SkillsEditFrontForm() {



    return (
        <div className='create_front_skill_form'>
            <form action="/db/admin/front/data/import" method="POST" className="front_edit_form">
                <input type="text" name='name' placeholder='Name' className="form_edit_input" />
                <input type="text" name='percentage' placeholder='Percentage' className="form_edit_input" />
                <input type="text" name='backgroundColor' placeholder='Background color' className="form_edit_input" />
                <input type="text" name='image' placeholder='Image url' className="form_edit_input" />
                <input type="text" name='alt' placeholder='Image alt' className="form_edit_input" />
                <button className='form_edit_button'>Create</button>
            </form>
        </div>
    )
}