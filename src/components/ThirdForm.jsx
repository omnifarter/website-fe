import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {getHospital} from '../redux/WebsightReducer'
class ThirdForm extends React.Component{

    async submitForm(event){
        event.preventDefault()
        //get HDB
        await this.props.getHospital(
            this.props.WebSight.age,
            this.state.ISP,
            this.state.PEC
        )
    }

    render(){
        return(
            <div className="second-form">
            <Form className="form-style">
                <FormGroup className="form-group">
                    <legend className='form-heading'>Do you have an Integrated Shield Plan?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="ISP" onChange={()=>{this.setState({ISP:'yes'})}} />
                    Yes
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="ISP" onChange={()=>{this.setState({ISP:'no'})}} />
                    No
                    </FormGroup>
                </FormGroup>

                <FormGroup className="form-group">
                    <legend className='form-heading'>Do you have any pre-existing medical conditions?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="loan" onChange={()=>{this.setState({PEC:'yes'})}} />
                    Yes
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="loan" onChange={()=>{this.setState({PEC:'no'})}} />
                    No
                    </FormGroup>
                </FormGroup>
            <Button type="submit" style ={{marginTop:'20px',marginLeft:'15%'}} color="primary" onClick={this.submitForm.bind(this)}>Click here to submit</Button>                
            </Form>
            </div>
        )
    }
}

export default connect(store =>({WebSight:store.WebSight}),
dispatch=> ({getHospital: (data) => dispatch(getHospital(data))})
) (ThirdForm)
