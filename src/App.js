import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';



const App = (props) => {
	
  return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="/profile" render={() => <Profile state={props.state.profilePage} dispatch ={props.dispatch}/>} />
					<Route path="/dialogs" render={() => <Dialogs store={props.store}  />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/setting" component={Settings} />
					<Route path="/friends" render={ () => <Friends state={props.state.sideBar}/>} />
				</div>
			
			</div>
		</BrowserRouter>
       
  )
}



export default App;
