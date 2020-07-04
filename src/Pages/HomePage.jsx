import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeName} from '../redux/mouseReducer'
import CustomSlider from '../Components/Slider/index'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Gabriel',
            price:null,
        }
        console.log(this.props.MeetupMouse.name)
    }
    whenClicked(evt){
        console.log('this is clicked')
        this.props.changeName(1234)
    }
    render(){
        return(
            <div>
                <Link to="/joinmeetup">
                <Button onClick={this.whenClicked.bind(this)} variant="contained" color="primary">
                    This directs to JoinMeetupPage
                </Button>
                </Link>
                <Grid container spacing={3}>
                <Grid item xs={12} lg={6} md={8}>
                <Paper>xs=12</Paper>
                </Grid>
      </Grid>

            </div>
            
        )
    }
}

export default connect(
    store=>({MeetupMouse:store.MeetupMouse}),
    dispatch=>({changeName:(name)=> dispatch(changeName(name))}))
    (HomePage)