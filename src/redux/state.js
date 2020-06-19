import dialogsReducer from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import profileReducer from "./profile-reducer";


const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT',
    ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state : {
        profilePage: {
            posts: [
                {id:1, message:'Hi, how are you?', likesCount: 15},
                {id:2, message:'This is my first post', likesCount: 20},
                {id:3, message: 'This is test', likesCount: 10}
            ],
            newPostText: ''
        },
        dialogsPage:{
            messages: [
                {id:1, message:'Hi'},
                {id:2, message:'How are you?'},
                {id:3, message: 'Yo'},
            ],
            dialogs:[
                {id:1, name:'Sviat', avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg9uScZnPwvrZvwpByA875rVdcQl1a8-FQUdk-DoMBhWL7k1M5&usqp=CAU"},
                {id:2, name:'Max', avatar: "https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg"},
                {id:3, name:'Mark', avatar: "https://pbs.twimg.com/media/EFEKbx9XUAAZZyg.png"},
                {id:4, name:'John', avatar: "https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg"},
                {id:5, name:'Igor', avatar: "https://pbs.twimg.com/media/EFEKbx9WwAEPGQM.png"},
                {id:6, name:'Victor', avatar: "https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg"}
            ],
            newMessageText: ''
        },
        sideBar: {
            bestFriends: [
                {id: 10, name: 'Sasha', avatar: "https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg"},
                {id: 11, name: 'Petya', avatar: "https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg"},
                {id: 12, name: 'Dima', avatar: "https://memepedia.ru/wp-content/uploads/2018/06/cover-2-2-768x507.jpg"}
            ]
        }
    }, 
    _callSubscriber () {
        console.log('State was changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer   
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
    
}


export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export let updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export let sendMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export let updateMessageTextCreator = (message) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        message: message
    }
}




export default store;

window.store = store;