import React from 'react';
import './routes/MapPage.css'
import studentGirl from '../static/persona/1x/StudentGirl.png'
import studentBoy from '../static/persona/1x/StudentBoy.png'
import workingGuy from '../static/persona/1x/working_guy.png'
import workingGirl from '../static/persona/1x/working_girl.png'
import singpass from '../static/singpass.png'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { getRetirement, setForm } from '../redux/WebsightReducer'
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router-dom'
class PersonaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            image: studentGirl,
            age: null,
            isFormSubmitted: false,
            gender: "Female",
            occupation: 'Student',
            nameIsInvalid: false,
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
    hasNumbers(t) {
        var regex = /\d/g;
        return regex.test(t);
    }
    handleChange(event) {
        if (event.target.name === 'name') {
            if (event.target.value.length == 0) {
                this.setState({ nameIsInvalid: true })
            }
            else if (this.hasNumbers(event.target.value)) {
                this.setState({ nameIsInvalid: true })
            }
            else {
                this.setState({ nameIsInvalid: null })
            }
        }
        if (event.target.name === 'age') {
            if (event.target.value < 0 || event.target.value === "") {
                this.setState({ ageIsInvalid: true })
            }
            else {
                this.setState({ ageIsInvalid: false })
            }
        }

        this.setState({ [event.target.name]: event.target.value })


    }
    async submitForm(event) {
        event.preventDefault()
        //update redux store
        if (this.state.name === "") {
            await this.setState({ nameIsInvalid: true })
        }
        if (this.state.age === null || this.state.age === "") {
            await this.setState({ ageIsInvalid: true })
        }
        if (!this.state.nameIsInvalid && !this.state.ageIsInvalid) {
            this.props.setForm(this.state.name, this.state.age, this.state.gender, this.state.occupation, this.state.image)
            //preload the retirement content first
            await this.props.getRetirement(this.state.age)
            if (this.props.WebSight.retirement) {
                this.setState({ isFormSubmitted: true })
            }
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
                <div className="form">
                    <Form className="form-container">
                        <FormGroup className="form-group">
                            <Label className='form-heading' >Name:</Label>
                            <Input invalid={this.state.nameIsInvalid} placeholder="enter name" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                            <FormFeedback invalid style={{ textAlign: 'start' }}>
                                Uh oh! Did you input your name correctly?
                        </FormFeedback>

                        </FormGroup>
                        <FormGroup className="form-group">
                            <Label className='form-heading'>Age:</Label>
                            <Input placeholder="enter age" type="number" name="age" invalid={this.state.ageIsInvalid} value={this.state.age} onChange={this.handleChange.bind(this)} />
                            <FormFeedback invalid style={{ textAlign: 'start' }}>
                                Uh oh! Did you input your age correctly?
                        </FormFeedback>
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
                        <FormGroup>
                            <Button type='submit' color='primary' style={{ marginTop: '20px' }} onClick={this.submitForm.bind(this)}>SUBMIT</Button>
                        </FormGroup>
                    </Form>
                </div>
                <div className='singpass'>
                    <img className='singpass-img' src={singpass} />
                </div>
            </div>
        )
    }
}

export default connect(store => ({ WebSight: store.WebSight }),
    dispatch => ({
        getRetirement: (age) => dispatch(getRetirement(age)),
        setForm: (name, age, gender, occupation, image) => dispatch(setForm(name, age, gender, occupation, image))
    })
)(PersonaCard)
