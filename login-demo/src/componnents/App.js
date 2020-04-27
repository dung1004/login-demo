import React, { Component } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import './../style/index.css';
import { userLoginFetch } from './../actions/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (e) => {
        let { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    onSubmit = (value) => {
        let { email, password } = this.state;
        this.props.userLoginFetch(email, password)
    }
    
    render() {

        return (
            <div className="App"> 
                <Container>
                    <Typography variant="h2" gutterBottom>
                        Login
                    </Typography>
                    <form > 
                        <FormControl>
                            <InputLabel >Email </InputLabel>
                            <Input 
                                type="email"
                                name ='email'
                                onChange = { this.onChange }
                             />
                            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                        </FormControl>
                        <FormControl>
                            <InputLabel >Password</InputLabel>
                            <Input 
                                type="password"
                                name ='password'
                                onChange = { this.onChange }
                             />
                            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                        </FormControl>
                        <Button variant="contained" color="primary" className="button" onClick = {this.onSubmit}> 
                            submit
                        </Button>
                    </form>
                </Container>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginFetch: (email, password) => {
            dispatch(userLoginFetch(email, password))
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
