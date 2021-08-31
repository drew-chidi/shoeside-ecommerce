import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products';
import { Data } from './components/Products/Data';
import Feature from './components/Feature/Feature'


function App() {
  return (
    <Router>
      <Hero />
      <Products data={Data}/>
      <Feature />
    </Router>
  );
}

export default App