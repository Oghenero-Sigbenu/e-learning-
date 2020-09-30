import React, {Component} from "react";
import Button from "../common/button";
import {reg, isValid} from "../common/validation";
import TextField from "../common/inputValidator";
import {AnimateInOut} from "../common/animat";
import {NavLink} from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address:"",
      phone:"",
      username: "",
      fullname:"",
      disable: true,
      show: true,
      helperText: "",
      error: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
  }

  handleChange(title, value, disable) {
    const { fullname, password, email, username, phone, address } = this.state;
   
    this.setState({
      [title]: value,
      disable: disable || (email === "" || !reg.test(email)  || password === "" || fullname === "" || username === "" || isValid(phone) || address === "") ? true : false
    })
  
  }
  submit(e) {
    e.preventDefault()
    const { fullname, password, email, username, phone, address  } = this.state;
    this.props.register({ fullname, password, email, username, phone, address })
    setTimeout(() => {
      this.props.history.push("/");
    }, 500);
    this.setState({
      show: false
    })
  }
  render() {
    const {fullname, password, email,show, username, phone, address } = this.state;
    return (
      <AnimateInOut className={show ? 'slide-in-top one' : 'slide-out-left'}>
      <div className="login pb-5">
      <h4>Create your account!</h4>
        <small>We're excited to meet you!<br />Fill out the form below to create your account</small>
          <div className="box1">
          <div className="inner-box">
        <form noValidate autoComplete="off" onSubmit={this.submit}>
            <TextField id="full-name" label="Full Name"name="fullname"  type="text" valType="name" value={fullname} getValue={this.handleChange} />
            <TextField id="email" label="Email address" helperText="Invalid email address" valType="email" name="email" type="email" value={email} getValue={this.handleChange} />
            <TextField id="username" label="Username" name="username" type="text" value={username} valType="text" getValue={this.handleChange} />
            <TextField id="password" label="Password" name="password" type="password" icon="true" value={password} valType="password" getValue={this.handleChange} />
            <TextField id="phone" type="text" label="Phone" value={phone} name="phone" valType="phone" getValue={this.handleChange} />
            <TextField id="address" label="Address"  type="text"name="address" valType="text" value={address} getValue={this.handleChange} />
            {/* {isLoading ? "Loading" :<Button >Create Account</Button>} */}
            <button className="new">Create Account</button>
        </form>
      </div>
      </div>
      <small>Have an account? <NavLink to="/login">Sign in</NavLink></small>
      </div>
      </AnimateInOut>
    )
  }
}



export default Signup;