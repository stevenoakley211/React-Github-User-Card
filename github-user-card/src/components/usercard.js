import React from 'react'

class UserCard extends React.Component {
    render(){
        return(
            <div>
                {console.log(this.props)}
                <h1>{this.props.user.login}</h1>
                <img src={this.props.user.avatar_url}></img>
                <div>
                    <h2>Followers</h2>
                    {this.props.user_followers.map((item) => <p>{item.login}</p>)}
                </div>
            </div>
        )
    }
}
export default UserCard;