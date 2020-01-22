import React from 'react';
import UserCard from './components/usercard'; 

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        user: {},
        user_followers:[],
        user_Search:""


  }
}
  
  componentDidMount() {
    fetch('https://api.github.com/users/stevenoakley211')
      .then(res => res.json())
      .then (user => {
        this.setState({user: user})
        // console.log(user)
      })
      .then( 
        fetch('https://api.github.com/users/stevenoakley211/followers')
          .then(res => res.json())
          .then( user_Followers =>{
            this.setState({user_followers: user_Followers })
            // console.log(user_follow)
          })
        )
        
  }
  
  render(){
    
    return(
      <div>
        <h1>Github User Profile</h1>
      
          
        
        <UserCard user={this.state.user} user_followers={this.state.user_followers} />
      </div>
    )
  }
}




export default App;
