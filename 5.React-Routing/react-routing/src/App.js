import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import { Navigation } from './components/Navigation';
import Products from './components/Products';



function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/primium" element={<h2>Pricing Primium </h2>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products/:productId" element={<Products />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
