import { MenuHamburger1Bulk, XmarkSolid } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-lineicons";
import photo from '../../assets/img/personal.jpeg';
import { Download1Outlined, GithubOutlined, LinkedinOutlined } from '@lineiconshq/free-icons';
import { useState } from "react";
import './hamburguer.scss';
import cv from '../../assets/rp_cv.pdf';

type Props = {
    options: string[]
}

function Hamburguer({options}: Props) {

    const[isOpen, setIsOpen] = useState<boolean>(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return(
        <div className="hamburguer-container">

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

            <div className="hamburguer-container-button"
                 onClick={handleClick}>
                {!isOpen ? <Lineicons icon={MenuHamburger1Bulk} size={50}/> : 
                           <Lineicons icon={XmarkSolid} size={50} className="xmark"/>} 
            </div>

            {isOpen && 

            <div className="hamburguer-container-open">
                <ul>
                    {options.map((option, index) => {
                        const targetId = option.toLowerCase().replace(" ", "-");
                        
                        return (
                            <li key={index} onClick={handleClick}>
                                <a href={`#${targetId}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                    {option}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default Hamburguer;