import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Hero />
        <Categories />

        {/* Routes for different categories */}
        <Routes>
          <Route exact path="/" component={Categories} />
          <Route path="/category/pizza" element={<Pizza />} />
          <Route path="/category/biryani" component={Biryani} />
          <Route path="/category/shake" component={Shake} />
          <Route path="/category/pureveg" component={PureVeg} />
          <Route path="/category/paratha" component={Paratha} />
          <Route path="/category/chinese" component={Chinese} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;