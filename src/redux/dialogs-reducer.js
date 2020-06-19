const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT',
    ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
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

export default dialogsReducer;