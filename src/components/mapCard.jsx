import React from 'react';
import cardFrame from '../static/cardFrame.png'
class MapCard extends React.Component {
render() {
    return(
    <div className="MapCard">
        <h6 className="MapCard-topic">{this.props.topic}</h6>
        <h5 className="MapCard-content">{this.props.content}</h5>
    </div>
    )
}
}

export default MapCard;