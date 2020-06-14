import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = () => {
    let postsData = [
        {id:1, message:'Hi, how are you?', likesCount: 15},
        {id:2, message:'This is my first post', likesCount: 20}
    ];
  return(
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
        <div>
           <textarea></textarea>
        </div>
        <div>
            <button>Add Post</button>
        </div> 
      </div>
      <div className={s.posts}>
            <Post message={postsData[0].message} likes={postsData[0].likesCount}/>
            <Post message={postsData[1].message} likes={postsData[1].likesCount}/>
      </div>
    </div>
  )
}


export default MyPosts;