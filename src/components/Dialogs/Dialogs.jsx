import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const Dialogs = () => {
  return (
    <div className={s.dialogs}> 
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to="/dialogs/1">Sviat</NavLink> 
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/2">Max</NavLink> 
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/3">Mark</NavLink> 
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/4">Victor</NavLink> 
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/5">John</NavLink> 
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/6">Igor</NavLink> 
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
