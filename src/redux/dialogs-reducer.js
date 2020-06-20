const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT',
    ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
   switch(action.type) {
       case ADD_MESSAGE:
            let newMessage = {id: 1, message: state.newMessageText};
            state.messages.push(newMessage);
            state.newMessageText = ''
            return state;
        case UPDATE_MESSAGE_TEXT:  
            state.newMessageText = action.message;
            return state;
        default:
            return state;
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

export default dialogsReducer;