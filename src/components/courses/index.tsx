import Lineicons from '@lineiconshq/react-lineicons';
import type { CoursesType } from '../../data/courses/courses';
import './courses.scss';
import { AngleDoubleLeftOutlined, AngleDoubleRightOutlined } from '@lineiconshq/free-icons';
import { useState } from 'react';

type Props = {
    courses: CoursesType[]
}

function Courses({courses}: Props) {

    const [current, setCurrent] = useState<number>(0);

    function handleDecrement() {
        setCurrent(prev => (prev === 0 ? courses.length - 1 : prev - 1));
    }

    function handleIncrement() {
        setCurrent(prev => (prev === courses.length - 1 ? 0 : prev + 1));
    }

    if (!courses || courses.length === 0) return null;

    return (
        <div id="cursos" className='carrousel-container'>
            <h2 className='courses-title'>Mis Cursos</h2>

            <div className="courses-container">
                <Lineicons 
                    icon={AngleDoubleLeftOutlined} 
                    size={40}
                    onClick={handleDecrement}
                    className='arrow left-arrow' 
                />
                
                <div className='courses-image'>
                    <img src={courses[current].img} alt="course image" />
                </div>

                <Lineicons 
                    icon={AngleDoubleRightOutlined} 
                    size={40} 
                    onClick={handleIncrement}
                    className='arrow right-arrow'
                />
            </div>
        </div>
    );
}

export default Courses;