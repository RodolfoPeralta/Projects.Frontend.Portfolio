import photo from '../../assets/img/personal.jpeg';
import './about.scss';

function About() {
    return (
        <section id="sobre-mi" className='about-container'>
            <img className='about-img' src={photo} alt="Rodolfo Peralta" />
            
            <article className='about-section-container'>
                <h2 className='about-title'>Sobre mí</h2>
                <p>
                    Soy <strong>Ingeniero Electrónico</strong> y durante mi carrera fui ampliando mi perfil técnico. 
                    Actualmente me dedico también al desarrollo web, trabajando con un enfoque Fullstack.
                </p>
                <p>
                    Tengo experiencia tanto en el <strong>Frontend</strong> (HTML, CSS, JS, Typescript, React) y 
                    en el <strong>Backend</strong> con Node.js y MongoDB, desarrollando aplicaciones escalables.
                </p>
                <p>
                    Mi formación en ingeniería electrónica me permite dominar entornos de bajo nivel como <strong>C/C++</strong> para hardware.
                </p>
                <p>
                    Además, tengo experiencia en entornos Microsoft, utilizando <strong>.NET y C#</strong> para aplicaciones de escritorio y servicios.
                </p>
            </article>
        </section>
    )
}

export default About;