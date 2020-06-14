import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink> 
        </div>

    )
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
    let dialogsData = [
        {id:1, name:'Sviat'},
        {id:2, name:'Max'},
        {id:3, name:'Mark'},
        {id:4, name:'John'},
        {id:5, name:'Igor'},
        {id:6, name:'Victor'}
    ];
    let messagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you?'},
        {id:3, message: 'Yo'},
    ];


  return (
      
    <div className={s.dialogs}> 
      <div className={s.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message}/>
      </div>
    </div>
  )
}




export default Dialogs;
