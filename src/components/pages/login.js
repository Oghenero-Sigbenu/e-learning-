import React, {Component} from "react";
import TextField from "../common/inputValidator";
import { reg } from '../common/validation';
import {NavLink} from "react-router-dom";


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
    setTimeout(() => {
      this.props.history.push("/");
    }, 500);
    this.setState({
      show: false
    })
  }
  render(){
    const {email, password} = this.state;
    return(
            <div className="login">
                  <h4>Welcome Back!</h4>
                <small>Enter your sign in information to continue</small>
                <div className="box1">
                  <div className="inner-box">
                <form autoComplete="off" onSubmit={this.submit}>
                      <TextField id="email" label="Email address" helperText="Invalid email address" valType="email" name="email" type="email" value={email} getValue={this.handleChange} />
                      <TextField id="standard" label="Password" value={password} name="password" type="password" onChange={this.handleChange}/>
                      <div className="flex">
                        <button className="new">Login</button>
                      </div>
                </form>
                </div>
                </div>
                <small>New to BOOKS? <NavLink to="/signup">Create an account</NavLink></small>
             </div>
    )
}
}


export default Login;