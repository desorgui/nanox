import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux/missions/missions';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  },[]);
  return (
    <Router>
      <main>
        <header>
          <Navbar />
        </header>
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
