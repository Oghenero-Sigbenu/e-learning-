import React, {Component} from "react";
import TextField from "../common/inputValidator";
import { reg } from '../common/validation';
import {NavLink,Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import {login} from "../../actions/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../common/navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      disable: true,
      show: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount(){
    if(this.props.token){
      this.props.history.push("/");
    }
  }
  handleChange(title, value, disable){
    const { email, password} = this.state;
    this.setState({
      [title] : value,
      disable: disable || (email === "" || !reg.test(email) || password === "") ? true : false
  })
  }
  submit(e) {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.login({email, password})
    this.setState({
      show: false
    })
  }
  render(){
    const {email, password} = this.state;
    const {isLoading, token} = this.props;
    return(
      <>
       <Navbar purple={true}/>
      <div className="login">
        <>
            {token ? <Redirect to="/"/>:
            <>
                <h4>Welcome Back!</h4>
              <small>Enter your sign in information to continue</small>
              <div className="box1">
                <div className="inner-box">
              <form autoComplete="off" onSubmit={this.submit}>
                    <TextField id="email" label="Email address" helperText="Invalid email address" valType="email" name="email" type="email" value={email} getValue={this.handleChange} />
                    <TextField id="standard" label="Password" value={password} name="password" type="password"  getValue={this.handleChange}/>
                    <div className="flex">
                      <button className="new">{isLoading ?
                      <FontAwesomeIcon icon={faSpinner} />
                       :"Login"}</button>
          
                    </div>
              </form>
              </div>
              </div>
              <small>New to LORE? <NavLink to="/signup">Create an account</NavLink></small>
            </>
            }
            </>
            </div>
            </>
    )
}
}

const mapStateToProps = (state) => {
  const { token, isLoading, msg, isLoggedIn } = state.auth;
  return {
    token,
    isLoading,
    msg,
    isLoggedIn,
  }
}

export default connect(mapStateToProps,{login} )(Login);