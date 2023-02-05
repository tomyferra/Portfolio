import NavigationBar from './components/Navbar';
import About from './components/About';
import PastWork from './components/PastWork';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="container-fluid no-margin-container">
      <div className="row">
        <NavigationBar />
        <About />
        <WorkExperience />
        <PastWork />
        <Skills />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
