import React, { Component } from 'react';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

class Profile extends Component {
	constructor(props) {
    super(props);
  }
  
  clicked = () => {
    toast.notify('Hello Bey!')
  }
	
  render() {
    return (
    <div>
      <button onClick={this.clicked}> alert </button><br/><br/>
		  <img src="merah.jpg"/>
    </div>
    );
  }
}

export default Profile;

