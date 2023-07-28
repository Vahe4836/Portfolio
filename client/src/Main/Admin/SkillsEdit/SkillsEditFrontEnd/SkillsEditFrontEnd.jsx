import SkillsEditFrontForm from './SkillsEditFrontForm/SkillsEditFrontForm';
import SkillEditFrontItems from './SkillsEditFrontItems/SkillsEditFrontItems';
import '../../../Pages/Skills/Skills.scss';
import '../../../Pages/Skills/SkillsMedia.scss';
import '../SkillsEdit.scss';


export default function SkillsEditFrontEnd({ frontEndData, setFrontEndData }) {


    const onDelete = function (id) {

        (async function () {

            await fetch("/db/admin/front/data/export", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    id: id
                })
            })
                .then((stream) => stream.json())
                .then((data) => {
                    setFrontEndData(data);
                })

        })()

    }


    return (

        <div className='skills_page'>

            <SkillEditFrontItems
                frontEndData={frontEndData}
                onDelete={onDelete}
            />

            <SkillsEditFrontForm
                setFrontEndData={setFrontEndData}
            />

        </div>

    )
}