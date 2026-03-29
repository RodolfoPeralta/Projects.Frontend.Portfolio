import './projectList.scss';
import {projects} from '../../data/projects/projects';
import Project from '../project';

function ProjectList() {
    return(
        <div id="proyectos" className='project-list-container'>
            <div className='project-list-title'>
                <h2>Proyectos</h2>
            </div>
            <div className='project-list-items'>
                {projects.map(p => <Project key={p.id} project={p}/>)}
            </div>
        </div>
    )

}

export default ProjectList;