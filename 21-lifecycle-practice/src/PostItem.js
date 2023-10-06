import React from 'react';

export default function PostItem({ post }) {
  return (
    <div className='item'>
      <div>
        No. {post.id}-{post.title}
      </div>
      <div>{post.body}</div>
    </div>
  );
}
