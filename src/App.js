import Rockets from './Components/Rockets';
import Missions from './Components/Missions';
import Profile from './Components/Profile';
import ErrorPage from './Components/ErrorPage';
import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
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
