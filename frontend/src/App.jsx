import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Home';
import BubbleSort from './bubble';
import BogoSort from './bogo';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bubble-sort" element={<BubbleSort />} />
        <Route path="/bogo-sort" element={<BogoSort />} />

      </Routes>
    </Router>
  );
}

export default App;