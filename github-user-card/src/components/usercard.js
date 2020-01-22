import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
`
const Img = styled.img`
    width:100%;

`

class UserCard extends React.Component {
    render(){
        return(
            <Card>
                {console.log(this.props)}
                <h1>{this.props.user.login}</h1>
                <Img src={this.props.user.avatar_url}></Img>
                <div>
                    <h2>Followers</h2>
                    {this.props.user_followers.map((item) => <p>{item.login}</p>)}
                </div>
            </Card>
        )
    }
}
export default UserCard;