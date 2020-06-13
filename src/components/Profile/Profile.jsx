import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';




const Profile = () => {
  return(
    <div className={s.content}>
      <div>
        <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" alt="" />
      </div>
      <div>
        ava + descr
      </div>
      <MyPosts />
  </div>
  )
}


export default Profile