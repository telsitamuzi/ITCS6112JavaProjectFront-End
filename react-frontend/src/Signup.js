import React, {useState} from 'react';


const Signup = () =>{

    const[data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    });
    const handleChange = (event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value,
        });
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault();
    }
    const handleFormClear = (e) =>{
        setData({
            firstname:"",
            lastname:"",
            email:"",
            password:"", 
        });
       
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
                        <input className="input" type="text" name="firstname" value={data.firstname} onChange={handleChange}/>
                    </div>
                    <div className="name">
                        <label className="label">Last Name</label>
                        <input className="input" type="text" name="lastname" value={data.lastname} onChange={handleChange}/>
                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" value={data.email} onChange={handleChange}/>
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input className="input" type="email" name="password" value={data.password} onChange={handleChange}/>
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                            Sign Up
                        </button>
                        <button className="submit" onClick={handleFormClear}>
                           Clear
                        </button>
                    </div>
                    { JSON.stringify(data) }
                </form>
            </div>
        </div>
        </>
    );
}

export default Signup;