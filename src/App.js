import './App.css';
import { useMemo } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Learning from './components/Learning';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Project />
      <Learning />
      <Footer />
    </div>
  );
}

export default App;
