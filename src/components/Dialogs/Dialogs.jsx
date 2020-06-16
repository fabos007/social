import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} avatar={item.avatar}/> 
        )
    });

    let messagesElements = props.state.messages.map(item => {
        return (<Message message={item.message} />)
    });

    let newMessage = React.createRef();
    let dialogMessage = () => {      
      props.addMessage();
      
    }
    let updateMessage = () => {
      let message = newMessage.current.value;
      props.updateMessageText(message)
    }

  return (
      
    <div className={s.dialogs}> 
      <div className={s.dialogsItems}>
          { dialogsElements }
      </div>
      <div className={s.messages}>
          { messagesElements } 
          <div>
            <textarea onChange={updateMessage} ref={newMessage} value={props.state.newMessageText}></textarea>
            <button onClick ={ dialogMessage }>Send</button>
         </div>
      </div>
      
    </div>
  )
}




export default Dialogs;
