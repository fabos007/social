import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
	{id:1, message:'Hi, how are you?', likesCount: 15},
	{id:2, message:'This is my first post', likesCount: 20},
	{id:3, message: 'This is test', likesCount: 10}
];

let dialogs = [
	{id:1, name:'Sviat'},
	{id:2, name:'Max'},
	{id:3, name:'Mark'},
	{id:4, name:'John'},
	{id:5, name:'Igor'},
	{id:6, name:'Victor'}
];
let messages = [
	{id:1, message:'Hi'},
	{id:2, message:'How are you?'},
	{id:3, message: 'Yo'},
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
