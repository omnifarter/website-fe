import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {getHDB} from '../redux/WebsightReducer'
class SecondForm extends React.Component{

    async submitForm(event){
        event.preventDefault()
        //get HDB
        await this.props.getHDB({HDBtype:this.state.HDBtype,loan:this.state.loan,intent:this.state.intent})
    }

    render(){
        return(
            <div className="second-form">
            <Form>
                <FormGroup className="form-group">
                    <legend className='form-heading'>Are you looking to buy or sell a HDB?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="intent" onChange={()=>{this.setState({intent:'Buying'})}} />
                    I'm looking to buy
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="intent" onChange={()=>{this.setState({intent:'Selling'})}} />
                    I'm looking to sell
                    </FormGroup>
                </FormGroup>
                <FormGroup className="form-group">
                    <legend className='form-heading'>Are you looking for a BTO or a resale?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="HDBtype" onChange={()=>{this.setState({HDBtype:'BTO'})}} />
                    I'm looking to buy a BTO
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="HDBtype" onChange={()=>{this.setState({intent:'Resale'})}} />
                    I'm looking to buy or sell a resale HDB
                    </FormGroup>
                </FormGroup>

                <FormGroup className="form-group">
                    <legend className='form-heading'>Are you looking to take a bank or HDB loan?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="loan" onChange={()=>{this.setState({loan:'HDB'})}} />
                    HDB loan
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="loan" onChange={()=>{this.setState({loan:'Bank'})}} />
                    Bank loan
                    </FormGroup>
                </FormGroup>
            <Button type="submit" style ={{marginTop:'20px'}} color="primary" onClick={this.submitForm.bind(this)}>Click here to submit</Button>                
            </Form>
            </div>
        )
    }
}

export default connect(store =>({WebSight:store.WebSight}),
dispatch=> ({getHDB: (data) => dispatch(getHDB(data))})
) (SecondForm)
