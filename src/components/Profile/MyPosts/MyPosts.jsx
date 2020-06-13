import React from 'react';
// import s from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = () => {
  return(
    <div>
      MyPosts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
       
      </div>
      <Post message="Hi, how are you?" likes="15"/>
      <Post message="This is my first post" likes="20"/>

    </div>
  )
}


export default MyPosts;