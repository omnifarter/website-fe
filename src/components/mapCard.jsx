import React from 'react';
import cardFrame from '../static/cardFrame.png'
class MapCard extends React.Component {
render() {
    let link = this.props.link;
    let linkText = this.props.linkText;
    let linkContent = <span style={{textDecoration:'underline'}}> <a className="MapCard-link" href={link}>{linkText}</a> </span>;
    if(link){
        return(
            <div className="MapCard">
                <h6 className="MapCard-topic">{this.props.topic}</h6>
                <h5 className="MapCard-content">{this.props.content}  {linkContent} </h5>
            </div>
            )
    }
    else{
        return(
            <div className="MapCard">
            <h6 className="MapCard-topic">{this.props.topic}</h6>
            <h5 className="MapCard-content">{this.props.content}</h5>
            </div>

        )
    }
}
}

export default MapCard;