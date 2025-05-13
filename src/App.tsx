import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>
          Create Post
        </Link>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;