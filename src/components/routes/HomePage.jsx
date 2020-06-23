import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import {connect} from 'react-redux'
import {getDetails} from '../../redux/WebsightReducer'
import './HomePage.css'
import PersonaCard from '../PersonaCard'
class HomePage extends React.Component {
    handleClick=()=>{
        this.props.getDetails({age:10})
    }

    render() {
        return(
        <div className="homepage">
            <h1> Choose your persona</h1>
            <div className="persona-container">
                <PersonaCard />
                <PersonaCard />
                <PersonaCard />

            </div>
            <Link to="/map">
                <Button onClick={this.handleClick}>click here to go to map page</Button>
            </Link>
        </div>
        )
    }
}

//@crystal everytime you wanna make a new component and it needs access to the store, follow the format down below, replace getDetails with whatever action u defined in WebsightReducer
export default connect(store =>({WebSight:store.WebSight}),
 dispatch => ({ getDetails: (data) => dispatch(getDetails(data)) })
) (HomePage)
