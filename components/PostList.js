import React from 'react';

const PostList = ({ posts, onPostClick }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.date} onClick={() => onPostClick(post)}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
