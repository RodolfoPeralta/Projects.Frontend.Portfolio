import web from '../../assets/img/projects/web.png';
import javascript from '../../assets/img/projects/javascript.png';
import react from '../../assets/img/projects/react.png';
import github from '../../assets/img/projects/github.png';
import recipe from '../../assets/img/projects/recipe.png';

export type ProjectType = {
    id: number,
    title: string,
    description: string,
    image: string,
    githubUrl: string,
    deployUrl: string
}

export const projects: ProjectType[] = [
    {
        id: 1,
        title: "Sitio web GIE Group",
        description: "Se trata del proyecto final del curso de Desarrollo Web de Coderhouse. Es un sitio web para la empresa donde trabajo, GIE Group. El proyecto está creado a partir de HTML, CSS, Bootstrap y SASS.",
        image: web,
        githubUrl: "https://github.com/RodolfoPeralta/CoderHouse.DesarrolloWeb.ProyectoFinal/tree/main",
        deployUrl: "https://giegroup-rp.netlify.app/"
    },
    {
        id: 2,
        title: "Trivia sobre la saga de Harry Potter",
        description: "Se trata del proyecto final del curso de Javascript de Coderhouse. Es un sitio web sobre preguntas y respuestas acerca de la saga de Harry Potter. El proyecto está creado a partir de HTML, CSS, SASS y Vanilla Javascript. Se hace uso de eventos, modificación del DOM, almacenamiento en local storage, entre otras cosas.",
        image: javascript,
        githubUrl: "https://github.com/RodolfoPeralta/CoderHouse.JavaScript.ProyectoFinal",
        deployUrl: "https://bejewelled-puffpuff-970611.netlify.app/"
    },
    {
        id: 3,
        title: "Sitio web casa de guitarras",
        description: "Se trata del proyecto final del curso de React de Coderhouse. Es un sitio web basado en un ecommerce de instrumentos musicales, principalmente guitarras. Está creado utilizando la librería React a partir de Vite, CSS y javascript.",
        image: react,
        githubUrl: "https://github.com/RodolfoPeralta/CoderHouse.ReactJs.ProyectoFinal",
        deployUrl: "https://lacasadelasguitarras-rp.netlify.app/"
    },
    {
        id: 4,
        title: "Buscador de perfiles github",
        description: "Se trata de un proyecto frontend personal. Es un sitio web que permite a los usuarios buscar cualquier perfil de github, visualizando información del desarrollador junto con un listado de sus repositorios públicos. La aplicación está desarrollada usando la librería React y javascript, consumiendo la REST API de Github.",
        image: github,
        githubUrl: "https://github.com/RodolfoPeralta/Projects.Frontend.GithubSearchProfile",
        deployUrl: "",
    },
    {
        id: 5,
        title: "Buscador de recetas",
        description: "Es una aplicación web moderna y reactiva diseñada para buscar recetas de cocina. Este proyecto consume la API de TheMealDB para ofrecer información detallada sobre comidas internacionales, incluyendo ingredientes y guías de preparación.",
        image: recipe,
        githubUrl: "https://github.com/RodolfoPeralta/Projects.Frontend.RecipePage",
        deployUrl: ""
    }
]