import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/Login';

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
      {/* Make sure the whole page is wrapped in flexbox for full height */}
      <div className="flex flex-col min-h-screen">
        
        {/* Header */}
        <Header />
        
        {/* Main content */}
        <div className="flex-grow">
          <div className="container mx-auto pl-28 md:pl-4 py-12">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              
              {/* Category routes */}
              <Route path="/category/pizza" element={<Pizza />} />
              <Route path="/category/biryani" element={<Biryani />} />
              <Route path="/category/shake" element={<Shake />} />
              <Route path="/category/pureveg" element={<PureVeg />} />
              <Route path="/category/paratha" element={<Paratha />} />
              <Route path="/category/chinese" element={<Chinese />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;