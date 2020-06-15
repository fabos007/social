import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} /> 
        )
    })

    let messagesElements = props.state.messages.map(item => {
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
