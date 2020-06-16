import { rerenderEntireTree } from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {id:5, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;  
    rerenderEntireTree(state);
};

export let addMessage = (message) => {
    let newMessage = {id: 1, message: state.dialogsPage.newMessageText};
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state);
}

export let updateMessageText = (message) => {
    state.dialogsPage.newMessageText = message;
    
    rerenderEntireTree(state);
}



export default state;