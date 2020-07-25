import React from 'react'
import './HomePage.css'
import PersonaCard from '../PersonaCard'
class HomePage extends React.Component {
    render() {
        return(
        <div className="homepage">
            <PersonaCard />
        </div>
        )
    }
}

export default (HomePage)
