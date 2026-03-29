import './App.scss'
import Header from './components/header'
import Technologies from './components/technologies'
import {technologies} from './data/technologies/technologies.ts';
import Courses from './components/courses/index.tsx';
import {courses} from './data/courses/courses.ts';
import ProjectList from './components/projectList/index.tsx';
import Footer from './components/footer/index.tsx';
import About from './components/about/index.tsx';

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Technologies technologies={technologies} />
      <Courses courses={courses} />
      <ProjectList/>
      <Footer/>
    </>
  )
}

export default App
