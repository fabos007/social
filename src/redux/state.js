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
 
    addPost () {
        let newPost = {id:5, message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText){
        this._state.profilePage.newPostText = newText;  
        this._callSubscriber(this._state);
    },
    addMessage(message){
        let newMessage = {id: 1, message: this._state.dialogsPage.newMessageText};
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state);
    },
    updateMessageText(message){
        this._state.dialogsPage.newMessageText = message;
        
        this._callSubscriber(this._state);
    },

    dispatch(action){

    }
}





export default store;

window.store = store;