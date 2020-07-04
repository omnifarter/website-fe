import React from 'react'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
class JoinMeetupPage extends React.Component{
    constructor(props){
        super(props)
    }
    showReduxState(){
        console.log(this.props.MeetupMouse)
    }
    render(){
        return(
            <div>
                <Button onClick={this.showReduxState.bind(this)} variant="contained" color="primary">
                    this is the join meetup page
                </Button>
            </div>
            
        )
    }
}

 export default connect(
     store=>({MeetupMouse:store.MeetupMouse}))
    (JoinMeetupPage)