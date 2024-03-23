import './Login.css';
import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handleInsert = async () => {
        try {
            await axios.post('http://localhost:3001/Login', {email,password});
            console.log('Data insert request sent');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className='daform'>
                <form>
                    <div className='box'>
                        
                        <label htmlFor='email'>Email:</label>
                        <input type='text' id='email' placeholder='Enter email' value={email} onChange={(e) => setemail(e.target.value)}></input>

                        <label htmlFor='password'>password:</label>
                        <input type='password' id='password' placeholder='Enter password' value={password} onChange={(e) => setpassword(e.target.value)}></input>

                        <button type="button" className="btn btn-primary loginbutton" onClick={handleInsert} value="submit">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
};

export default Login;
