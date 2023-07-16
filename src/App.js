import './App.css';
import { useMemo } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header/>
      <Project />
      <Footer />
    </div>
  );
}

export default App;
