let state = {
    profilePage: {
        posts: [
            {id:1, message:'Hi, how are you?', likesCount: 15},
            {id:2, message:'This is my first post', likesCount: 20},
            {id:3, message: 'This is test', likesCount: 10}
        ]
    },
    dialogsPage:{
        messages: [
            {id:1, message:'Hi'},
            {id:2, message:'How are you?'},
            {id:3, message: 'Yo'},
        ],
        dialogs:[
            {id:1, name:'Sviat'},
            {id:2, name:'Max'},
            {id:3, name:'Mark'},
            {id:4, name:'John'},
            {id:5, name:'Igor'},
            {id:6, name:'Victor'}
        ]
    }
}


export default state;