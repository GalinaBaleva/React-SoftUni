import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateGame from './components/Create/CreateGame';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/catalog" element={<Catalog />} />

        </Routes>
      </main>
    </div>

  );
}

export default App;
