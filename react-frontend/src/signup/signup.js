import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
const SignUp = () =>{
    const sign_up_url='http://localhost:3000/sign-up-process';
    let history = useHistory();
    const[formDta, setformDta] = useState({
        firstname:"",
        lastname:"",
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
       axios.post(sign_up_url,{
           firstname:formDta.firstname,
           lastname: formDta.lastname,
           email:formDta.email,
           password:formDta.password
       }).then(res=> {
           console.log(res.data);
            history.push("/thank-you");
       });

    
    }
    const handleFormClear = (e) =>{
        setformDta({
            firstname:"",
            lastname:"",
            email:"",
            password:"", 
        });
       
    }
    return (
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" name="firstname" value={formDta.firstname} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" name="lastname" value={formDta.lastname} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" name="email" value={formDta.email} onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" value={formDta.password} onChange={handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit} >
                Sign Up
                </button>
        
            <p className="forgot-password text-right">
                Already registered <a href="/s">sign in?</a>
            </p>
        </form>
        
    );
}

export default SignUp;
