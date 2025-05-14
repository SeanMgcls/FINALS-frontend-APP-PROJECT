import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/post';

const CreatePost: React.FC = () => {
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost({ caption, imageUrl });
      alert('Post created successfully!');
      navigate('/'); // Navigate back to the home page after successful submission
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', boxSizing: 'border-box' }}>
      <h1>Create a New Post</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '350px', // set a max width for the form
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#fff',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="caption" style={{ display: 'block', marginBottom: '5px' }}>Caption:</label>
          <input
            type="text"
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="imageUrl" style={{ display: 'block', marginBottom: '5px' }}>Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;