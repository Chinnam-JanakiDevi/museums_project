// import './Login.css';
// import axios from 'axios';
// import React, { useState } from 'react';

// const Login = () => {
//     const [email, setemail] = useState('');
//     const [password, setpassword] = useState('');
//     const handleInsert = async () => {
//         try {
//             await axios.post('http://localhost:3001/Login', {email,password});
//             console.log('Data insert request sent');
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     return (
//         <>
//             <div className='daform'>
//                 <form>
//                     <div className='box'>

//                         <label htmlFor='email'>Email:</label>
//                         <input type='text' id='email' placeholder='Enter email' value={email} onChange={(e) => setemail(e.target.value)}></input>

//                         <label htmlFor='password'>password:</label>
//                         <input type='password' id='password' placeholder='Enter password' value={password} onChange={(e) => setpassword(e.target.value)}></input>

//                         <button type="button" className="btn btn-primary loginbutton" onClick={handleInsert} value="submit">Submit</button>
//                     </div>
//                 </form>
//             </div>

//         </>
//     )
// };

// export default Login;

import './Login.css'; // Use a different CSS file name
import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInsert = async () => {
        try {
            await axios.post('http://localhost:5000/Login', { email, password });
            console.log('Data insert request sent');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <form>
                    <div className='login-box'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='text'
                            id='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            type="button"
                            className="custom-btn login-button"
                            onClick={handleInsert}
                            value="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <p className="register-link">Don't have an account? <a href="/Registration">Register</a></p>
        </div>
    );
};

export default Login;

