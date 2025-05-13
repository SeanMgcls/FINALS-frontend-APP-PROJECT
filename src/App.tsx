import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Router>
        <nav style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', textAlign: 'center' }}>
          <Link to="/" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>
            Create Post
          </Link>
        </nav>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 50px)', // Adjust height to exclude the navbar
            padding: '10px',
            boxSizing: 'border-box',
          }}
        >
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;