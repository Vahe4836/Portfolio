import SkillsEditBackEndForm from "./SkillsEditBackEndForm/SkillsEditBackEndForm";
import SkillEditBackItems from "./SkillsEditBackEndItems/SkillsEditBackItems";
import '../../../Pages/Skills/Skills.scss';
import '../../../Pages/Skills/SkillsMedia.scss';
import '../SkillsEdit.scss';
// import '../../../Pages/Skills/Skills.scss';




export default function SkillsEditBackEnd({ backEndData, setBackEndData }) {

    const onDelete = function (id) {

        (async function () {

            await fetch("/db/admin/back/data/export", {
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
                    setBackEndData(data);
                })

        })()

    }

    return (
        <div className='skills_page'>

            <SkillEditBackItems
                setBackEndData={setBackEndData}
                backEndData={backEndData}
                onDelete={onDelete}
            />

            <SkillsEditBackEndForm
                setBackEndData={setBackEndData}
            />

        </div>
    )
}
