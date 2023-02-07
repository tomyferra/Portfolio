import NavigationBar from './components/Navbar';
import About from './components/About';
import PastWork from './components/PastWork';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Links from './components/Links';

import './App.css';

function App() {
  return (
    <div className="mt-auto d-flex flex-column min-vh-100">
      <div className="row">
        <NavigationBar />
        <About />
        <WorkExperience />
        <PastWork />
        <Skills />
        <Links/>
      </div>
    </div>
  );
}

export default App;
