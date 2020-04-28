import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Home extends Component {

  showWelCome = () => {
    let result = null;
    let { currentUser } = this.props.loginData;

    if (currentUser && currentUser.length > 0) {
      currentUser.map((item) => {
        result = <h2>Welcome your {item.email} </h2>;
      });
      this.onLoginSuccess();
    }

    return result;
  };

    
  onLoginSuccess = () => {
    return toast.success("Dăng nhập thành công !");
  };

  render() {
    return (
      <React.Fragment>
        <h2>This is home page</h2>
        {this.showWelCome()}
        <ToastContainer />
       
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginData: state.login,
  };
};

export default connect(mapStateToProps, null)(Home);
