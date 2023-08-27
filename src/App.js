import './App.css';
import Footer from './components/public/Footer';
import Header from './components/public/Header';
import Home from './components/public/Home';
import Main from './components/public/Main';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';




function App() {
  
  return (
    <>
      <ThemeProvider>
      <Header />
      <Routes>
        <Route exact path={'/'} element={<Main />} />
        <Route path={'/home/:id'} element={<Home />} />
        {/* ruta por defecto */}
        <Route path='*' element={<Main />} />
      </Routes>
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
