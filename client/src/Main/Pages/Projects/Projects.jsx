import { useEffect, useState } from 'react';
import './Projects.scss';



export default function Projects() {


    const [data,setData] = useState([])

    useEffect(()=>{

        fetch("/db/projects").then(res => res.json()).then(res => {
            console.log(res,"ress");
        })

    },[])





    return (
        <div className='projects_page'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Et expedita praesentium quo adipisci enim eius consequatur dignissimos est iste,
            accusantium doloribus saepe fuga labore aspernatur
            placeat accusamus debitis voluptatibus magni?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ad architecto impedit quae beatae sequi voluptatem aliquam nisi placeat facere ea ipsa nostrum optio in sapiente, id corrupti? Labore, at!
            Et, eos voluptatum minus accusantium quam voluptatem qui non perspiciatis pariatur debitis ratione recusandae error ducimus excepturi nihil labore autem. Eos facere culpa optio quod placeat cupiditate amet quidem. Quasi!
            Sunt sed inventore neque ab. Itaque minima illo quis voluptate rem! Est vitae quasi, velit libero deserunt in eius eos veniam facilis asperiores, provident, quod iure nesciunt vel! Incidunt, eum?
            Ab consequuntur repellendus voluptatem necessitatibus? Quia alias rerum saepe molestiae magni eum quod, perspiciatis odio vero veritatis perferendis eligendi sunt libero praesentium cum quos reiciendis sequi animi nostrum dolorem earum?
            Inventore aperiam quisquam assumenda odit molestiae, ad error voluptatem necessitatibus ipsa recusandae aut veniam mollitia esse pariatur odio reiciendis accusantium! Porro accusantium alias maxime veniam, reiciendis incidunt voluptatum ratione modi.
            Minima quod pariatur sapiente fuga accusantium. Mollitia neque quo impedit ipsa veniam incidunt, provident in qui quam error voluptate vitae iste dolor ullam hic, quia sunt eligendi quod accusantium vel.
            Omnis commodi nesciunt quaerat fuga facilis rem quod non a maiores obcaecati blanditiis, at velit nihil reiciendis. Laboriosam, neque in labore saepe, exercitationem nam laudantium perferendis tempore quo aut amet!
            Ab nesciunt, corporis repellendus, id maiores illo natus facilis, placeat nobis ea fugit. Architecto, blanditiis consequuntur repudiandae quisquam minus odio esse, deserunt perferendis commodi sint eum ab eveniet! Repellendus, voluptatibus?
            Assumenda obcaecati consequuntur repellat a magnam consequatur amet distinctio dolores laudantium atque, illo commodi aut ab molestiae possimus impedit minima velit maxime quaerat blanditiis numquam? Molestias officiis corporis ullam quidem.
            Rerum, iure veritatis? Corporis, saepe porro odit magnam quidem harum nesciunt quasi? Expedita molestiae autem officiis deleniti, deserunt, aspernatur illo pariatur corporis atque eveniet eos porro ratione, magni iste eaque?
            Reiciendis, voluptate corrupti ducimus magni autem incidunt aperiam laudantium voluptatum ratione ipsa eligendi commodi, nostrum minus hic quae magnam harum quia dolorem eius id deleniti temporibus vitae a. Qui, quos.
            Fugit iure consequuntur laudantium? Architecto fugiat dolores autem similique eveniet doloribus sequi atque accusantium repellat delectus commodi reprehenderit sint provident corrupti maxime assumenda, neque id? Consectetur inventore porro atque labore?
            Fuga doloremque a voluptas laborum. Qui nisi fugit excepturi optio ad hic magnam. Doloribus voluptas magnam sapiente possimus quibusdam! Illo placeat suscipit tenetur, sequi sapiente blanditiis? Deserunt cumque ex commodi.
            Nihil unde quos quidem, in accusamus facilis ut perspiciatis, ipsa ratione dolore voluptatibus quod voluptatem sunt tempore voluptates, earum totam! Odio voluptates fugiat voluptate quos, quisquam assumenda quasi debitis odit.
            Voluptatibus odio officia perferendis adipisci accusantium at tenetur a, in facilis fugiat excepturi neque. Iure pariatur accusamus doloribus quos facilis dolorem illum dolores! Fuga iste excepturi facere iure deserunt perferendis.
            Iusto corporis rerum dolorem veritatis beatae? Ea rerum reiciendis aut laudantium dolorem harum esse ullam nisi delectus magni obcaecati magnam iure nam assumenda itaque totam quisquam, minima et, ad mollitia.
            Dolorum architecto distinctio accusamus sed dolorem, blanditiis soluta in inventore fugit obcaecati voluptatibus, aliquid voluptatum similique tempora possimus. Quasi, nulla repellat. Deleniti esse ut ullam voluptates, facere nam excepturi molestias.
            Rem, earum rerum iusto nihil eos non quo veniam numquam nisi, cumque excepturi iste voluptatem ipsum reprehenderit dolorem odio sed impedit ducimus illum? Incidunt officiis quod dolorem quaerat illum sit!
            Corporis quo vel repellendus fuga, illo error omnis velit reiciendis aut! Excepturi eum exercitationem saepe repellendus facere sed dolore molestias laborum repellat sit illo quasi quo, adipisci quis quae cupiditate?
            Magni, assumenda quod soluta repudiandae quo blanditiis repellendus deleniti labore? Qui, tempora. Inventore quos at veritatis rerum exercitationem, iusto voluptatibus? Incidunt doloremque laboriosam excepturi tempore minus provident, natus numquam commodi.
        </div>
    )
}