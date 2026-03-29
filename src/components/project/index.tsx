import Lineicons from '@lineiconshq/react-lineicons';
import type { ProjectType } from '../../data/projects/projects';
import './project.scss';
import { GithubOutlined, NetlifyOutlined } from '@lineiconshq/free-icons';

type Props = {
    project: ProjectType
}

function Project({project}: Props) {
    return(
        <div className='project-container'>
            <div className='project-title'>
                <h3>{project.title}</h3>
            </div>
            <div className='project-image'>
                <img src={project.image} alt={project.title} />
            </div>
            <div className='project-description'>
                <p>
                    {project.description}
                </p>
            </div>
            <div className='project-a-container'>
                {project.githubUrl != "" && 
                    <div className='project-a'>
                        <a target="_blank" href={project.githubUrl}>
                            <div className='a-content'>
                                <Lineicons icon={GithubOutlined} size={20}/>Github
                            </div>
                        </a>
                    </div>
                }
                {project.deployUrl != "" &&
                    <div className='project-a'>
                        <a target="_blank" href={project.deployUrl}>
                            <div className='a-content'>
                                <Lineicons icon={NetlifyOutlined} size={20}/>Deploy
                            </div>
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default Project;