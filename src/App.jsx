// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'; 
import About from './pages/About'; 
import Facilitators from './pages/Facilitators';
import Contact from './pages/Contact'; 
import Sessions from './pages/Sessions'; 
import Resources from './pages/Resources'; 
import FAQ from './pages/FAQ'; 
import Header from './components/Header';

import Footer from './components/Footer';
import theme from './styles/Styles.jsx';

import {Routes, Route} from 'react-router-dom'; 
import { ThemeProvider } from '@emotion/react';
import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="pages" >
        <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/about/facilitators" element={<Facilitators />} />          
         <Route path="/sessions" element={<Sessions />} />
         <Route path="/resources" element={<Resources />} />
         <Route path="/contact" element={<Contact />} /> 
         <Route path="/contact/faqs" element={<FAQ />} />
      </Routes>
      </div>
      <Footer />

    </ThemeProvider>
  );
}

// export default App;
