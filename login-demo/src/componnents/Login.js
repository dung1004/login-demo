import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
  FormHelperText,
} from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";

import "./../style/index.css";
import { userLoginFetch } from "./../actions/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      mesEmail: "",
      mesPass: "",
    };
  }

  onChange = (e) => {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = () => {
    let { email, password } = this.state;

    if (email === "") {
      this.setState({
        mesEmail: "Email cannot be empty",
      });
    }
    if (email !== "") {
      this.setState({
        mesEmail: "",
      });
    }
    if (password === "") {
      this.setState({
        mesPass: "Password cannot be empty",
      });
    }
    if (password !== "") {
      this.setState({
        mesPass: "",
      });
    }
    if (email !== "" && password !== "") {
      this.props.userLoginFetch(email, password);
      this.onLoginErr();

    }

  };

  onLoginErr = () => {
    let result = null;
    let { error } = this.props.login;

    if (error.length > 0) {
      result = toast.error(error);
    }
    return result;
  };

  render() {
    let { mesEmail, mesPass } = this.state;
    let { currentUser } = this.props.login;

    if (currentUser && currentUser.length > 0) {
      // check neu co du lieu dang nhap thanh cong thi chuyeen ve trang chu
      return (
        <Route>
          <Redirect to="/home" />
        </Route>
      );
    }

    return (
      <Container>
        {<ToastContainer />}
        <Typography variant="h2" gutterBottom>
          Login
        </Typography>
        <form>
          <FormControl>
            <InputLabel>Email </InputLabel>
            <Input type="email" name="email" onChange={this.onChange} />
            <FormHelperText id="my-helper-text" className="mesErr">
              {mesEmail !== "" ? mesEmail : ""}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input type="password" name="password" onChange={this.onChange} />
            <FormHelperText id="my-helper-text" className="mesErr">
              {mesPass !== "" ? mesPass : ""}
            </FormHelperText>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={this.onSubmit}
          >
            submit
          </Button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginFetch: (email, password) => {
      dispatch(userLoginFetch(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
