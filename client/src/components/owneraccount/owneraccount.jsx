import React from 'react';

const OwnerAccount = ({ openUploadWidget }) => {
  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <div>
        <h2>Create New Post</h2>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Content"></textarea>
        <button onClick={openUploadWidget}>Upload Image</button>
        <button>Create Post</button>
      </div>
    </div>
  );
}

export default OwnerAccount;
