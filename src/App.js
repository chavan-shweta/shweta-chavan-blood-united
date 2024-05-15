import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import Index from './pages/Index/Index';

function App() {
  return (
    <BrowserRouter className="app">
      <Header />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/index" element={<Index />} />
          <Route path="*" element={<div>Not Found 404 🥲</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
