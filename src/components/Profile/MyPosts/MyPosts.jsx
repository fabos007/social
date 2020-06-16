import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>)

  let newPostElement = React.createRef()
  let addPost = () => {
      debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
  }
    

  return(
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <div>
        <div>
           <textarea ref={newPostElement}></textarea>
        </div>
        <div>
            <button onClick={ addPost }>Add Post</button>
        </div> 
      </div>
      <div className={s.posts}>
          { postsElement }
           
      </div>
    </div>
  )
}


export default MyPosts;