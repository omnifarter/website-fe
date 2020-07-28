import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux'
import {getHospital} from '../redux/WebsightReducer'
class ThirdForm extends React.Component{

    async submitForm(event){
        event.preventDefault()
        //get HDB
        await this.props.getHospital({
            age:this.props.WebSight.age,
            ISP:this.state.ISP,
            PEC:this.state.PEC
        })
    }

    render(){
        return(
            <div className="second-form">
            <Form>
                <FormGroup className="form-group">
                    <legend className='form-heading'>Do you have an Integrated Shield Plan?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="ISP" onChange={()=>{this.setState({ISP:true})}} />
                    Yes
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="ISP" onChange={()=>{this.setState({ISP:false})}} />
                    No
                    </FormGroup>
                </FormGroup>

                <FormGroup className="form-group">
                    <legend className='form-heading'>Do you have any pre-existing medical conditions?</legend>
                    <FormGroup style={{marginRight:'1rem'}} check>
                    <Input type="radio" name="loan" onChange={()=>{this.setState({PEC:true})}} />
                    Yes
                    </FormGroup>
                    <FormGroup check>
                    <Input type="radio" name="loan" onChange={()=>{this.setState({PEC:false})}} />
                    No
                    </FormGroup>
                </FormGroup>
            <Button type="submit" onClick={this.submitForm.bind(this)}>Click here to submit</Button>                
            </Form>
            </div>
        )
    }
}

export default connect(store =>({WebSight:store.WebSight}),
dispatch=> ({getHospital: (data) => dispatch(getHospital(data))})
) (ThirdForm)
