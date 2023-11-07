import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import LandingPage from './pages/LandingPage';
import CarSearchPage from './pages/CarSearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/carSearch" element={<CarSearchPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
