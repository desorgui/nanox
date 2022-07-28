import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { getRockets } from './redux/rockets/rockets';
import { getMissions } from './redux/missions/missions';
import Rockets from './components/Rockets.js';
import Missions from './components/Missions.js';
import Profile from './components/Profile.js';
import ErrorPage from './components/ErrorPage.js';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMissions());
  }, [dispatch]);
  return (
    <Router>
      <main>
        <header>
          <Navbar />
        </header>
        <hr />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
