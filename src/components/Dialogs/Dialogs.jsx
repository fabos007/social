import React from 'react';
import s from './Dialogs.module.css';



const Dialogs = () => {
  return (
    <div className={s.dialogs}> 
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
            Sviat
        </div>
        <div className={s.dialog}>
            Max
        </div>
        <div className={s.dialog}>
            Mark
        </div>
        <div className={s.dialog}>
            Viktor
        </div>
        <div className={s.dialog}>
            John
        </div>
        <div className={s.dialog}>
            Igor
        </div>
      </div>
      <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>How are you?</div>
          <div className={s.message}>Your name?</div>
      </div>
    </div>
  )
}


export default Dialogs;
