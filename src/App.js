import NavigationBar from './components/Navbar';
import About from './components/About';
import PastWork from './components/Projects';
import Skills from './components/Skills';
// import WorkExperience from './components/WorkExperience';
import Links from './components/Links';


import './App.css';
import ExperienceTimeline from './components/ExperienceTimeline';

function App() {
  return (
    <div className="mt-auto d-flex flex-column min-vh-100">
      <div className="row">
        <NavigationBar />
        <About />
        <ExperienceTimeline />
        {/* <WorkExperience /> */}
        <PastWork />
        <Skills />
        <Links/>
      </div>
    </div>
  );
}

export default App;
