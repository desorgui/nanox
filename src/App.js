import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { getRockets } from './redux/rockets/rockets';
import { getMissions } from './redux/missions/missions';
import Splash from './components/Splash';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
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
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
