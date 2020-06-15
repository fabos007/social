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
      let message = newMessage.current.value;
      alert(message);
      
    }

  return (
      
    <div className={s.dialogs}> 
      <div className={s.dialogsItems}>
          { dialogsElements }
      </div>
      <div className={s.messages}>
          { messagesElements } 
          <div>
            <textarea ref={newMessage}></textarea>
            <button onClick ={ dialogMessage }>Send</button>
         </div>
      </div>
      
    </div>
  )
}




export default Dialogs;
