import html from '../../assets/img/tech-icons/html.png';
import css from '../../assets/img/tech-icons/css.png';
import javascript from '../../assets/img/tech-icons/javascript.png';
import react from '../../assets/img/tech-icons/react.png';
import node from '../../assets/img/tech-icons/node.png';
import mongo from '../../assets/img/tech-icons/mongo.png';
import csharp from '../../assets/img/tech-icons/csharp.png';
import cpp from '../../assets/img/tech-icons/c.png';
import typescript from '../../assets/img/tech-icons/typescript.png';

export type TechnologiesType = {
    id: number,
    img: string
}

export const technologies: TechnologiesType[] = [
    {
        id: 1,
        img: html
    },
    {
        id: 2,
        img: css
    },
    {
        id: 3,
        img: javascript
    },
    {
        id: 4,
        img: typescript
    },
    {
        id: 5,
        img: react
    },
    {
        id: 6,
        img: node
    },
    {
        id: 7,
        img: mongo
    },
    {
        id: 8,
        img: csharp
    },
    {
        id: 9,
        img: cpp
    }
]