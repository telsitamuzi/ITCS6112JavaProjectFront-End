import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Signin = () =>{
    //const sign_up_url='http://localhost:3000/sign-up-process';
    const sign_in_url='http://localhost:8080/users/login';
    let history = useHistory();
    const[formDta, setformDta] = useState({
        email:"",
        password:"",
    });
    const handleChange = (event)=>{
        setformDta({
            ...formDta,
            [event.target.name]:event.target.value,         
        });
    }
   
    const handleSubmit = (event) =>{
       event.preventDefault();
       axios.post(sign_in_url,{
           email: formDta.email,
           password:formDta.password
       }).then(res=> {
            history.push("/success");
       });

    
    }

        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" value={formDta.email} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" value={formDta.password} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        );
    }
export default Signin;