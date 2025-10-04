import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Research from './components/Research';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Courses />
      <Research />
      <Footer />
    </div>
  );
}

export default App;
