// import React, { useState } from 'react';

// const PostDetails = ({ post, onLike, onComment }) => {
//   const [commentText, setCommentText] = useState('');
//   const [replyTo, setReplyTo] = useState(null);

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     onComment(post, commentText, replyTo);
//     setCommentText('');
//     setReplyTo(null);
//   };

//   const handleReplyClick = (commentId) => {
//     setReplyTo(commentId);
//   };

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <p>Likes: {post.likes}</p>
//       <button onClick={() => onLike(post)}>Like</button>
//       <div>
//         <h3>Comments</h3>
//         {post.comments.map((comment) => (
//           <div key={comment.id}>
//             <p>{comment.text}</p>
//             <button onClick={() => handleReplyClick(comment.id)}>Reply</button>
//             {replyTo === comment.id && (
//               <form onSubmit={handleCommentSubmit}>
//                 <input
//                   type="text"
//                   value={commentText}
//                   onChange={(e) => setCommentText(e.target.value)}
//                 />
//                 <button type="submit">Add Reply</button>
//               </form>
//             )}
//             <div style={{ marginLeft: '20px' }}>
//               {comment.replies.map((reply) => (
//                 <div key={reply.id}>
//                   <p>{reply.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <form onSubmit={handleCommentSubmit}>
//           <input
//             type="text"
//             value={commentText}
//             onChange={(e) => setCommentText(e.target.value)}
//           />
//           <button type="submit">
//             {replyTo !== null ? 'Add Reply' : 'Add Comment'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostDetails;


// import React, { useState } from 'react';

// const PostDetails = ({ post, onLike, onComment }) => {
//   const [commentText, setCommentText] = useState('');
//   const [replyText, setReplyText] = useState('');
//   const [replyTo, setReplyTo] = useState(null);

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (replyTo !== null) {
//       onComment(post, replyText, replyTo);
//       setReplyText('');
//       setReplyTo(null);
//     } else {
//       onComment(post, commentText, null);
//       setCommentText('');
//     }
//   };

//   const handleReplyClick = (commentId) => {
//     setReplyTo(commentId);
//     setReplyText('');
//   };

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <p>Likes: {post.likes}</p>
//       <button onClick={() => onLike(post)}>Like</button>
//       <div>
//         <h3>Comments</h3>
//         {post.comments.map((comment) => (
//           <div key={comment.id}>
//             <p>{comment.text}</p>
//             <button onClick={() => handleReplyClick(comment.id)} disabled={replyTo !== null}>Reply</button>
//             {replyTo === comment.id && (
//               <form onSubmit={handleCommentSubmit}>
//                 <input
//                   type="text"
//                   value={replyText}
//                   onChange={(e) => setReplyText(e.target.value)}
//                 />
//                 <button type="submit">Add Reply</button>
//               </form>
//             )}
//             <div style={{ marginLeft: '20px' }}>
//               {comment.replies.map((reply) => (
//                 <div key={reply.id}>
//                   <p>{reply.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <form onSubmit={handleCommentSubmit}>
//           <input
//             type="text"
//             value={commentText}
//             onChange={(e) => setCommentText(e.target.value)}
//             disabled={replyTo !== null}
//           />
//           <button type="submit" disabled={replyTo !== null}>
//             {replyTo !== null ? 'Adding Reply...' : 'Add Comment'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostDetails;


import React, { useState } from 'react';

const PostDetails = ({ post, onLike, onComment }) => {
  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (replyTo !== null) {
      onComment(post, replyText, replyTo);
      setReplyText('');
      setReplyTo(null);
    } else {
      onComment(post, commentText, null);
      setCommentText('');
    }
  };

  const handleReplyClick = (commentId) => {
    setReplyTo(commentId);
    setReplyText('');
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Likes: {post.likes}</p>
      <button onClick={() => onLike(post)}>Like</button>
      <div>
        <h3>Comments</h3>
        {post.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <button onClick={() => handleReplyClick(comment.id)} disabled={replyTo !== null}>Reply</button>
            {replyTo === comment.id && (
              <form onSubmit={(e) => { e.preventDefault(); handleCommentSubmit(e); }}>
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button type="submit">Add Reply</button>
              </form>
            )}
            <div style={{ marginLeft: '20px' }}>
              {comment.replies.map((reply) => (
                <div key={reply.id}>
                  <p>{reply.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {!replyTo && (
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button type="submit">
              {replyTo !== null ? 'Adding Reply...' : 'Add Comment'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostDetails;
