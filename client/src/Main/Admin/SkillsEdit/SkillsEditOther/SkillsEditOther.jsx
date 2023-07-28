// import SkillsEditFrontForm from './SkillsEditFrontForm/SkillsEditFrontForm';
// import SkillEditFrontItems from './SkillsEditFrontItems/SkillsEditFrontItems';
import '../../../Pages/Skills/Skills.scss';
import '../../../Pages/Skills/SkillsMedia.scss';
import '../SkillsEdit.scss';
import SkillsEditOtherItems from './SkillsEditOtherItems/SkillsEditOtherItems';
import SkillsEditOtherForm from './SkillsEditOtherForm/SkillsEditOtherForm';


export default function SkillsEditOther({ otherData, setOtherData }) {


    const onDelete = function (id) {

        (async function () {

            await fetch("/db/admin/other/data/export", {
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
                    setOtherData(data);
                })

        })()

    }


    return (

        <div className='skills_page'>

            <SkillsEditOtherItems
                otherData={otherData}
                onDelete={onDelete}
            />

            <SkillsEditOtherForm
                setOtherData={setOtherData}
            />

        </div>

    )
}