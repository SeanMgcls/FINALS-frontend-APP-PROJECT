import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPosts, deletePost } from '../api/post';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    loadPosts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id); // Call the API to delete the post
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); // Remove the post from state
      alert('Post deleted successfully!');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', maxWidth: 'auto' }}>
      <h1>Posts</h1>
      <Link to="/create">
        <button
          style={{
            marginBottom: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Create New Post
        </button>
      </Link>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                marginBottom: '20px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <div style={{ marginBottom: '10px' }}>
                <img
                  src={post.imageUrl || 'https://via.placeholder.com/150'}
                  alt={post.caption || 'Image'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <h2 style={{ margin: '10px 0' }}>{post.caption || 'No Caption'}</h2>
              <p style={{ color: '#777', fontSize: '14px' }}>
                {new Date(post.timestamp).toLocaleString()}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                  onClick={() => navigate(`/edit/${post.id}`)} // Navigate to the Edit page
                >
                  Edit
                </button>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#DC3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleDelete(post.id)} // Attach delete handler
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;