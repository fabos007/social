
const ADD_POST = 'ADD-POST',
UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id:1, message:'Hi, how are you?', likesCount: 15},
        {id:2, message:'This is my first post', likesCount: 20},
        {id:3, message: 'This is test', likesCount: 10}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST:
            let newPost = {id:5, message: state.newPostText, likesCount: 0}
            state.posts.push(newPost);
            state.newPostText = '';
             return state;
         case UPDATE_NEW_POST_TEXT:  
             state.newPostText = action.newText; 
             return state;
         default:
             return state;
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
    

export default profileReducer;