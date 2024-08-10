import {useState} from 'react';
import {HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Home from './Home';
import Nav from './Sections/Nav';
import News from './Pages/News';
import Results from './Pages/Results';
import Footer from './Sections/Footer';
import Live from './components/Live';
import Videos from './Pages/Videos';
import Score from './components/Score';
import NewsCnt from './Pages/NewsCnt';
import Downloads from './Pages/Downloads';
import Admin from './AdminSide/Admin';
import About from './Pages/About';
import ImageUpload from './Pages/ImageUpload';


function App () {
  const [count, setCount] = useState (0);
  const [onLive, setOnlive] = useState (false);
  const [scoreOn, setScoreOn] =useState(false)

  return (
    <Router>
      <Nav onLive={onLive} />
      {onLive && <Live />}
      <Score scoreOn={scoreOn} setScoreOn={setScoreOn} />
      
      <Routes>

        <Route path="*" element={<Navigate to="/sahieast" />} />
        <Route path="/sahieast/" element={<Home />} />
        <Route path="/sahieast/about" element={<About />} />
        <Route path="/sahieast/news" element={<News />} />
        <Route path="/sahieast/newscnt" element={<NewsCnt />} />
        <Route path="/sahieast/downloads" element={<Downloads/>} />
        <Route path="/sahieast/results" element={<Results />} />
        <Route path="/sahieast/videos" element={<Videos />} />
        <Route path="/sahieast/admin" element={<Admin/>} />
        <Route path="/sahieast/admin/addimage" element={<ImageUpload/>} />

      </Routes>

      <Footer  />
      
    </Router>
  );
}

export default App;
