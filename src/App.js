import './App.css';
import Header from './components/header';


import Footer from './components/footer';


import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
// Import category components
import Pizza from './components/componentsexplore/Pizza';
import Biryani from './components/componentsexplore/biryani';
import Shake from './components/componentsexplore/shake';
import PureVeg from './components/componentsexplore/pureVeg';
import Paratha from './components/componentsexplore/paratha';
import Chinese from './components/componentsexplore/chinese';

function App() {
  return (
    <Router>
      <div className="App">
  
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/pizza" element={<Pizza />} />
          <Route path="/category/biryani" element={<Biryani />} />
          <Route path="/category/shake" element={<Shake />} />
          <Route path="/category/pureveg" element={<PureVeg />} />
          <Route path="/category/paratha" element={<Paratha />} />
          <Route path="/category/chinese" element={<Chinese />} />
        </Routes>
           
             <Footer />
      </div>
    </Router>
  );
}

export default App;