import React from 'react'
import CPFBuilding from '../../static/CPFBuilding.png'
import HDB from '../../static/HDB.png'
import Hospital from '../../static/Hospital.png'
import School from '../../static/Education.png'
import MapCard from '../mapCard'
import SecondForm from '../SecondForm'
import ThirdForm from '../ThirdForm'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './MapPage.css'
import {connect} from 'react-redux'
const Dialog = (props) =>{
    let text;
    if(props.selected=='cpf'){
        text= "How can CPF help my retirement?"
    }
    else if(props.selected == 'hdb'){
        text="How can CPF help me with housing?"
    }
    if (props.selected == 'hospital'){
        text="How can CPF help me with healthcare?"
    }
    
    return(
        <div className="dialog-box">
            <h5 className="dialog-text">{text}</h5>
        </div>
    )
}
class MapPage extends React.Component {

    constructor(props) {
        super(props)
        let name = this.props.WebSight.name;
        this.state = {
            name: name.split(' ')[0],
            selected: null
        }

    }
    onClick = (icon) => {
        if (this.state.selected === null) {
            this.setState({ selected: icon })
        }
        else {
            this.setState({ selected: null })
        }
    }
    renderCards(type) {
        if (type == 'cpf') {
            console.log(this.props.WebSight.retirement)
            return(
                this.props.WebSight.retirement.map((object)=>{
                    if(object.text!=null){
                        return <MapCard key={object.topic} content={object.text} topic={object.topic} link={object.link} linkText={object.linkText} />
                    }
                })
            )
        }
        if (type == 'hdb' && !this.props.WebSight.housing) {
            return (
                // ask for more questions (return a new form?)
                <SecondForm />
            )
        }
        if(type=='hdb' && this.props.WebSight.housing){
            return(
                this.props.WebSight.housing.map((object)=>{
                    if(object.text!=null){
                        return <MapCard key={object.topic} content={object.text} topic={object.topic} link={object.link} linkText={object.linkText} />
                    }
                })
            )
        }

        if (type == 'hospital' && !this.props.WebSight.healthcare) {
            return (
                // ask for more questions (return a new form?)
                <ThirdForm />
            )
        }
        if(type=='hospital' && this.props.WebSight.healthcare){
            return(
                this.props.WebSight.healthcare.map((object)=>{
                    if(object.text!=null){
                        return <MapCard key={object.topic} content={object.text} topic={object.topic} link={object.link} linkText={object.linkText} />
                    }
                })
            )

        }


    }
  render() {
    return (
    <div className="Map-page">
        <div className="icon-container">
            <img src={CPFBuilding} className={this.state.selected==='cpf'?"cpf-building-clicked":(this.state.selected===null?"cpf-building":"cpf-building-hidden")} onClick={()=>{this.onClick('cpf')}}/>
            <img className={"character-map"} src={this.props.WebSight.image} />
            {this.state.selected!=null && <Dialog selected={this.state.selected} />}
            <img src={HDB} className={this.state.selected==='hdb'?"hdb-building-clicked":(this.state.selected===null?"hdb-building":"hdb-building-hidden")} onClick={()=>{this.onClick('hdb')}}/>
            <img src={Hospital}className={this.state.selected==='hospital'?"hospital-building-clicked":(this.state.selected===null?"hospital-building":"hospital-building-hidden")} onClick={()=>{this.onClick('hospital')}}/>
            {/* <img src={School} className='school-building' /> */}

        </div>
<h5 className={!this.state.selected?"extra-info":"extra-info-hidden"} >
            {"Hey "+ this.state.name + "! Don't know what to do? Click on one of the buildings to find out more!"}
            </h5>
        {this.state.selected=='cpf' &&
                        <div className="cards-container">
                                        <Button size ='lg' color='danger' className="back-button" onClick={()=>{this.setState({selected:null})}}>Back</Button>
                            {this.renderCards('cpf')}
                </div>    
        }
        {this.state.selected=='hdb' &&
        <div className="cards-container">
            <Button size ='lg' className="back-button" color='danger' onClick={()=>{this.setState({selected:null})}}>Back</Button>
                {this.renderCards('hdb')}
        </div>} 
        {this.state.selected=='hospital' &&
        <div className="cards-container">
            <Button size ='lg' className="back-button" color='danger' onClick={()=>{this.setState({selected:null})}}>Back</Button>
                {this.renderCards('hospital')}
        </div>} 

                <div className="map-bg">
                </div>
            </div>
        )
    }
}
export default connect(store => ({ WebSight: store.WebSight }),

)(MapPage)
