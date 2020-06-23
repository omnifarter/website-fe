import React from 'react'
import CPFBuilding from '../../static/CPFBuilding.png'
import HDB from '../../static/HDB.png'
import Hospital from '../../static/Hospital.png'
import MapCard from '../mapCard'
import './MapPage.css'
class MapPage extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            selected:null
        }
    }
    onClick=(icon)=>{
        if(this.state.selected===null){
            this.setState({ selected:icon})
        }
        else{
            this.setState({ selected:null})
        }
    }
  render() {
    return (
    <div className="Map-page">
        <div className="icon-container">
            <img src={CPFBuilding} className={this.state.selected==='cpf'?"cpf-building-clicked":(this.state.selected===null?"cpf-building":"cpf-building-hidden")} onClick={()=>{this.onClick('cpf')}}/>
            <img src={HDB} className={this.state.selected==='hdb'?"hdb-building-clicked":(this.state.selected===null?"hdb-building":"hdb-building-hidden")} onClick={()=>{this.onClick('hdb')}}/>
            <img src={Hospital}className={this.state.selected==='hospital'?"hospital-building-clicked":(this.state.selected===null?"hospital-building":"hospital-building-hidden")} onClick={()=>{this.onClick('hospital')}}/>
        </div>
        {this.state.selected!==null &&
        <div className="cards-container">
            <MapCard content="fact A" />
            <MapCard content="fact B" />
            <MapCard content="fact C" />
        </div>
        }
        <div className="map-bg">
        </div>
    </div>
    )
  }
}
export default MapPage
