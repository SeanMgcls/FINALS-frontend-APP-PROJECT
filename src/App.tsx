import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
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
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 60px)', // Adjust for navbar height
          }}
        >
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;