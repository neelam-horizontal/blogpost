import React, { useState } from 'react';

const PostForm = ({ onPostSubmit }) => {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      writer,
      title,
      content,
      date: new Date().toISOString(),
      comments: [],
    };
    onPostSubmit(newPost);
    setWriter('');
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="writer">Writer:</label>
        <input
          type="text"
          id="writer"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
