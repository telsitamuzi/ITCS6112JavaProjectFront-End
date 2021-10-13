import React, {useState} from 'react';


const Signup = () =>{

    const[data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })
    const handleFormSubmit = (e) =>{
        e.preventDefault();
    }
    return(

        <>
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">First Name</label>
                        <input className="input" type="text" name="firstname" value={data.firstname}/>
                    </div>
                    <div className="name">
                        <label className="label">Last Name</label>
                        <input className="input" type="text" name="lastname" value={data.lastname}/>
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={data.email}/>
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="email" name="password" value={data.password}/>
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                            Sign Up
                        </button>
                        { JSON.stringify(data) }
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Signup;