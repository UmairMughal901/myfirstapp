import React, {Component} from 'react'
import fire from "./fire";

class Register_user extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailPlaceHolder: 'Please enter email.',
            passwordPlaceHolder: 'Please enter password.',
            required: true,
            emailVal: '',
            passVal: ''
        }
    }

    registerUser = () => {
        // alert("click")
        fire.auth().createUserWithEmailAndPassword(this.state.emailVal, this.state.passVal).then(response => {
            alert("User created successfully.");
        }).catch((error => {
            alert(error.message)
        }))
    }

    loginUser = () => {
        fire.auth().signInWithEmailAndPassword(this.state.emailVal, this.state.passVal).then(response => {
            alert("User Login successfully.");
        }).catch((error => {
            alert(error.message)
        }))
    }

    checkUser = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                alert('this user ' + user.email + ' already logged in.');
            } else {
                alert("User not sign in.");
            }
        })
    }

    logoutUser = () => {
        fire.auth().signOut();
    }

    handleEmailChange = (event) => {
        this.setState({
            emailVal: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            passVal: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="email" onChange={this.handleEmailChange} placeholder={this.state.placeholder}
                       required={this.state.required}/>
                <input type="password" onChange={this.handlePasswordChange} placeholder={this.state.passwordPlaceHolder}
                       required={this.state.required}/>
                <button onClick={this.registerUser}>Register User</button>
                <br/>
                <button onClick={this.loginUser}>Login User</button>
                <br/>
                <button onClick={this.checkUser}>Check Sign in or not</button>
                <br/>
                <button onClick={this.logoutUser}>Logout User</button>
            </div>
        )
    }

}

export default Register_user