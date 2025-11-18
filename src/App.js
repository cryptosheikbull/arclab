import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh - 60px)' }}>
        <Menu />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<div className="content-card"><h1 style={{ color: '#FFFFFF' }}>Welcome to Arclab - Your ARC DApp Development Lab</h1></div>} />
            <Route path="/ecosystem" element={<div className="content-card"><h1 style={{ color: '#FFFFFF' }}>Non-official Ecosystem DApps (Coming Soon)</h1></div>} />
            <Route path="/playground" element={<div className="content-card"><h1 style={{ color: '#FFFFFF' }}>Playground (Coming Soon)</h1></div>} />
            <Route path="/about" element={<div className="content-card"><h1 style={{ color: '#FFFFFF' }}>About Us (Coming Soon)</h1></div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;