import React from 'react';
import classes from './Friends.module.css'


const Friends = (props) => {
	console.log(props.state);
	let bestFriends = props.state.bestFriends.map(friend => <div><img src={friend.avatar} alt="avatar"/>{friend.name}</div>)
  return(
		<div>
			<h4>Friends</h4>	
			<div className={classes.friendsWrapper}> 
				{bestFriends}
			</div>		
		</div>
  )
}


export default Friends