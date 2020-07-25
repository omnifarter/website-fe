import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {getHDB} from '../redux/WebsightReducer'
class SecondForm extends React.Component{

    async submitForm(event){
        event.preventDefault()
        //get HDB
        await this.props.getHDB({HDBtype:this.state.HDBtype,loan:this.state.loan})
    }

    render(){
        return(
            <div className="second-form">
            <Form>
                <FormGroup className="form-group">
                    <legend className='form-heading'>Are you looking to buy or sell a HDB?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="HDBtype" onChange={()=>{this.setState({HDBtype:'0'})}} />
                    I'm looking to buy a new HDB flat
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="HDBtype" onChange={()=>{this.setState({HDBtype:'1'})}} />
                    I'm looking to buy a resale HDB flat
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="HDBtype" onChange={()=>{this.setState({HDBtype:'2'})}} />
                    I'm looking to sell my HDB flat
                    </FormGroup>
                </FormGroup>

                <FormGroup className="form-group">
                    <legend className='form-heading'>Are you looking to take a bank or HDB loan?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="loan" onChange={()=>{this.setState({loan:'0'})}} />
                    HDB loan
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="loan" onChange={()=>{this.setState({loan:'1'})}} />
                    Bank loan
                    </FormGroup>
                </FormGroup>
            <Button type="submit" onClick={this.submitForm.bind(this)}>Click here to submit</Button>                
            </Form>
            </div>
        )
    }
}

export default connect(store =>({WebSight:store.WebSight}),
dispatch=> ({getHDB: (data) => dispatch(getHDB(data))})
) (SecondForm)
