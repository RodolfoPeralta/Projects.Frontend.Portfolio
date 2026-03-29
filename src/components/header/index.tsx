import './header.scss';
import photo from '../../assets/img/personal.jpeg';
import { useIsMobile } from '../../hooks/useWindowSize';
import Hamburguer from '../hamburguer';
import Lineicons from '@lineiconshq/react-lineicons';
import { Download1Outlined, GithubOutlined, LinkedinOutlined } from '@lineiconshq/free-icons';
import cv from '../../assets/rp_cv.pdf';

const options = [
    "Cursos",
    "Proyectos",
    "Sobre mi"
]

function Header() {

    const isMobile = useIsMobile();

    if(isMobile) {
        return(
            <Hamburguer options={options}/>
        )
    }

    return (
        <div className='headerContainer'>
            <div className='header-1'>
                <div className='header-1-image'>
                    <img src={photo} alt="Profile photo" />
                </div>
                <b>Rodolfo Peralta</b>
            </div>

            <div className='header-center'>
                <a target="_blank" href="https://www.linkedin.com/in/rodolfo-peralta/" rel="noreferrer">
                    <Lineicons icon={LinkedinOutlined} size={24} />
                </a>
                <a target="_blank" href="https://github.com/RodolfoPeralta" rel="noreferrer">
                    <Lineicons icon={GithubOutlined} size={24} />
                </a>
                <a href={cv} download="Peralta-Rodolfo-CV.pdf" className="cv-button">
                    <Lineicons icon={Download1Outlined} size={20} /> Descargar CV
                </a>
            </div>

            <div className='nav-menu'>
                <a href="#sobre-mi">Sobre Mí</a>
                <a href="#cursos">Cursos</a>
                <a href="#proyectos">Proyectos</a>
            </div>
        </div>
);
}

export default Header;