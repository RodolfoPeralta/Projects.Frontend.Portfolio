import type { TechnologiesType } from "../../data/technologies/technologies";
import './technologies.scss';

type Props = {
    technologies: TechnologiesType[]
}

function Technologies({technologies}: Props) {
    return(
        <div className="technologies-container">
            <ul className='technologies-ul'>
                {technologies.map((t) => <li key={t.id}><img src={t.img} alt={"image from technologies"} /></li>)}
            </ul>
        </div>
    )
}

export default Technologies;