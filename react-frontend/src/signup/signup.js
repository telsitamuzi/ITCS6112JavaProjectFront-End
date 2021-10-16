import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p>
            </form>
        );
    }
}