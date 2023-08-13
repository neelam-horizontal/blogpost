// import React, { useState } from 'react';
// import PostForm from '../components/PostForm';
// import PostList from '../components/PostList';
// import PostDetails from '../components/PostDetails';

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   const handlePostSubmit = (newPost) => {
//     setPosts([...posts, { ...newPost, likes: 0 }]);
//   };

//   const handlePostClick = (post) => {
//     setSelectedPost(post);
//   };

//   const handlePostLike = (postToLike) => {
//     const updatedPosts = posts.map((post) =>
//       post === postToLike ? { ...post, likes: post.likes + 1 } : post
//     );
//     setPosts(updatedPosts);
//     setSelectedPost((prevSelectedPost) =>
//       prevSelectedPost === postToLike ? { ...postToLike, likes: postToLike.likes + 1 } : prevSelectedPost
//     );
//   };

//   const handleCommentSubmit = (post, commentText) => {
//     const newComment = { id: Date.now(), text: commentText };
//     const updatedPosts = posts.map((p) =>
//       p === post ? { ...p, comments: [...p.comments, newComment] } : p
//     );
//     setPosts(updatedPosts);
//     setSelectedPost((prevSelectedPost) =>
//       prevSelectedPost === post ? { ...post, comments: [...post.comments, newComment] } : prevSelectedPost
//     );
//   };

//   return (
//     <div>
//       <h1>Blog App</h1>
//       <div className="flex">
//         <div className="w-1/3">
//           <PostForm onPostSubmit={handlePostSubmit} />
//           <PostList posts={posts} onPostClick={handlePostClick} />
//         </div>
//         <div className="w-2/3">
//           {selectedPost ? (
//             <PostDetails
//               post={selectedPost}
//               onLike={handlePostLike}
//               onComment={handleCommentSubmit}
//             />
//           ) : (
//             <p>Select a post to view details</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useState } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import PostDetails from '../components/PostDetails';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, { ...newPost, likes: 0 }]);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handlePostLike = (postToLike) => {
    const updatedPosts = posts.map((post) =>
      post === postToLike ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
    setSelectedPost((prevSelectedPost) =>
      prevSelectedPost === postToLike ? { ...postToLike, likes: postToLike.likes + 1 } : prevSelectedPost
    );
  };

  const handleCommentSubmit = (post, commentText, replyTo) => {
    const newComment = { id: Date.now(), text: commentText, replies: [] };
    const updatedPosts = posts.map((p) =>
      p === post ? { ...p, comments: [...p.comments, newComment] } : p
    );
    if (replyTo) {
      updatedPosts.forEach((p) => {
        if (p === post) {
          p.comments = p.comments.map((c) =>
            c.id === replyTo ? { ...c, replies: [...c.replies, newComment] } : c
          );
        }
      });
    }
    setPosts(updatedPosts);
    setSelectedPost((prevSelectedPost) =>
      prevSelectedPost === post ? { ...post, comments: [...post.comments, newComment] } : prevSelectedPost
    );
  };

  return (
    <div>
      <h1>Blog App</h1>
      <div className="flex">
        <div className="w-1/3">
          <PostForm onPostSubmit={handlePostSubmit} />
          <PostList posts={posts} onPostClick={handlePostClick} />
        </div>
        <div className="w-2/3">
          {selectedPost ? (
            <PostDetails
              post={selectedPost}
              onLike={handlePostLike}
              onComment={handleCommentSubmit}
            />
          ) : (
            <p>Select a post to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
