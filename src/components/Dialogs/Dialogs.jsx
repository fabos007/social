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
    let dialogs = [
        {id:1, name:'Sviat'},
        {id:2, name:'Max'},
        {id:3, name:'Mark'},
        {id:4, name:'John'},
        {id:5, name:'Igor'},
        {id:6, name:'Victor'}
    ];
    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'How are you?'},
        {id:3, message: 'Yo'},
    ];

    let dialogsElements = dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} /> 
        )
    })

    let messagesElements = messages.map(item => {
        return (<Message message={item.message} />)
    })

  return (
      
    <div className={s.dialogs}> 
      <div className={s.dialogsItems}>
          { dialogsElements }
      </div>
      <div className={s.messages}>
          { messagesElements } 
      </div>
    </div>
  )
}




export default Dialogs;
