import web from '../../assets/img/courses/web.png';
import javascript from '../../assets/img/courses/javascript.png';
import react from '../../assets/img/courses/react.png';
import backend1 from '../../assets/img/courses/backend1.png';
import backend2 from '../../assets/img/courses/backend2.png';
import backend3 from '../../assets/img/courses/backend3.png';

export type CoursesType = {
    id: number,
    img: string
}

export const courses: CoursesType[] = [
    {
        id: 1,
        img: web
    },
    {
        id: 2,
        img: javascript
    },
    {
        id: 3,
        img: react
    },
    {
        id: 4,
        img: backend1
    },
    {
        id: 5,
        img: backend2
    },
    {
        id: 6,
        img: backend3
    }
]