import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} avatar={item.avatar}/> 
        )
    });

    let messagesElements = state.messages.map(item => {
        return (<Message message={item.message} />)
    });
    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator())
    }


    let onMessageChange = (e) => {
      let message = e.target.value
      props.store.dispatch(updateMessageTextCreator(message))
    }

  return (
      
    <div className={s.dialogs}> 
      <div className={s.dialogsItems}>
          { dialogsElements }
      </div>
      <div className={s.messages}>
          { messagesElements } 
          <div>
            <textarea onChange={onMessageChange} value={newMessageBody}></textarea>
            <button onClick ={ onSendMessageClick }>Send</button>
         </div>
      </div>
      
    </div>
  )
}




export default Dialogs;
