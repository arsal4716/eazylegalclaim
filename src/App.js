import './App.css';
import Main from './components/maincontent/Main';
import PortalPage from './components/portal/portal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/portal' element={<PortalPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
