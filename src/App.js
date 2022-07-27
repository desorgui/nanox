import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';
import { getRockets } from './redux/rockets/rockets';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
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
