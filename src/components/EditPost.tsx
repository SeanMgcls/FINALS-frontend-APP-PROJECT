import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPostById, updatePost } from '../api/post';

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (id) {
          const post = await fetchPostById(Number(id));
          setCaption(post.caption);
          setImageUrl(post.imageUrl);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    loadPost();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updatePost(Number(id), { caption, imageUrl });
        alert('Post updated successfully!');
        navigate('/'); // Navigate back to the home page
      }
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Failed to update post. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="caption" style={{ display: 'block', marginBottom: '5px' }}>
            Caption:
          </label>
          <input
            type="text"
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="imageUrl" style={{ display: 'block', marginBottom: '5px' }}>
            Image URL:
          </label>
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
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;