import React from 'react';

class MapCard extends React.Component {
render() {
    return(
    <div className="MapCard">
        {this.props.content}
    </div>
    )
}
}

export default MapCard;