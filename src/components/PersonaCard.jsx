import React from 'react';
import './routes/MapPage.css'
import studentGirl from '../static/persona/1x/StudentGirl.png'
import studentBoy from '../static/persona/1x/StudentBoy.png'
import workingGuy from '../static/persona/1x/working_guy.png'
import workingGirl from '../static/persona/1x/working_girl.png'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux'
import { getRetirement, setForm } from '../redux/WebsightReducer'
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router-dom'
class PersonaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            image: studentGirl,
            age: null,
            isFormSubmitted: false,
            gender: "Female",
            occupation: 'Student'
        }
    }

    componentDidUpdate(nextProps, nextState) {
        //logic to be applied later
        if (this.state.gender != nextState.gender) {
            if (this.state.image != workingGuy && this.state.gender === 'Male' && (this.state.occupation === "Working adult" || this.state.occupation === "Self-employed")) {
                this.setState({ image: workingGuy })
            }
            if (this.state.image != workingGirl && this.state.gender === "Female" && (this.state.occupation === "Working adult" || this.state.occupation === "Self-employed")) {
                this.setState({ image: workingGirl })
            }
            if (this.state.image != studentGirl && this.state.gender === "Female" && this.state.occupation === "Student") {
                this.setState({ image: studentGirl })
            }
            if (this.state.image != studentBoy && this.state.gender === "Male" && this.state.occupation === "Student") {
                this.setState({ image: studentBoy })
            }
        }
        if (this.state.occupation != nextState.occupation) {
            if (this.state.image != workingGuy && this.state.gender === 'Male' && (this.state.occupation === "Working adult" || this.state.occupation === "Self-employed")) {
                this.setState({ image: workingGuy })
            }
            if (this.state.image != workingGirl && this.state.gender === "Female" && (this.state.occupation === "Working adult" || this.state.occupation === "Self-employed")) {
                this.setState({ image: workingGirl })
            }
            if (this.state.image != studentGirl && this.state.gender === "Female" && this.state.occupation === "Student") {
                this.setState({ image: studentGirl })
            }
            if (this.state.image != studentBoy && this.state.gender === "Male" && this.state.occupation === "Student") {
                this.setState({ image: studentBoy })
            }
        }
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })


    }
    async submitForm(event) {
        event.preventDefault()
        //update redux store
        this.props.setForm(this.state.name, this.state.age, this.state.gender, this.state.occupation)
        //preload the retirement content first
        await this.props.getRetirement(this.state.age)
        if (this.props.WebSight.retirement) {
            this.setState({ isFormSubmitted: true })
        }
    }
    render() {
        if (this.state.isFormSubmitted) {
            return (
                <Redirect to='/map' />
            )
        }
        return (
            <div className="persona">
                <div className="background-img">
                    <img className='img-position' src={this.state.image} />
                </div>
                <Form className="form-container">
                    <FormGroup className="form-group">
                        <Label className='form-heading'>Name:</Label>
                        <Input placeholder="enter name" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                    </FormGroup>

                    <FormGroup className="form-group">
                        <Label className='form-heading'>Age:</Label>
                        <Input placeholder="enter age" type="number" name="age" value={this.state.age} onChange={this.handleChange.bind(this)} />
                    </FormGroup>

                    <FormGroup className="form-group form-radio">
                        <Label className='form-heading form-heading-radio'>Gender:</Label>
                        <FormGroup style={{ marginRight: '1rem' }} check>
                            <Input type="radio" name="gender" onChange={() => { this.setState({ gender: 'Male' }) }} />
                        Male
                        </FormGroup>
                        <FormGroup check>
                            <Input type="radio" name="gender" defaultChecked onChange={() => { this.setState({ gender: 'Female' }) }} />
                        Female
                        </FormGroup>
                    </FormGroup>

                    <FormGroup className="form-group">
                        <Label>Occupation:</Label>
                        <Input type="select" name="occupation" onChange={this.handleChange.bind(this)}>
                            <option>Student</option>
                            <option>Self-employed</option>
                            <option>Working adult</option>
                            <option>Unemployed</option>
                            <option>Retired</option>
                        </Input>
                    </FormGroup>
                    <button type='submit' onClick={this.submitForm.bind(this)}>SUBMIT</button>
                </Form>

            </div>
        )
    }
}

export default connect(store => ({ WebSight: store.WebSight }),
    dispatch => ({
        getRetirement: (age) => dispatch(getRetirement(age)),
        setForm: (name, age, gender, occupation) => dispatch(setForm(name, age, gender, occupation))
    })
)(PersonaCard)
