import React from 'react';
import s from './Post.module.css'




const Post = (props) => {
  console.log(props)
  return(
    
      <div className={s.posts}>
        <div className={s.item}>
          <img src="https://images.alphacoders.com/711/thumb-350-711581.jpg" alt=""/>
       {props.message}
          <button>Like {props.likes}</button>
        </div>
      </div>
   
  )
}


export default Post;