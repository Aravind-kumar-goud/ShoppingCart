import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginData } from './Redux/Action';


function Login() {
    const navigate=useNavigate()
   const dispatch=useDispatch()
    const state  = useSelector(state =>state);
    const [formData, setFormData] = useState({
        email: "",
        confirmPassword: "",
    })

    const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);

    const toggle = () => {
        setConfirmPasswordShown(!confirmpasswordShown)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.userData)
        console.log(formData.email);    
        const FilterItems=state.userData.filter(e=>e.email==formData.email&&e.confirmPassword==formData.confirmPassword)
        console.log(FilterItems)
        if(FilterItems.length){
            dispatch(loginData(true))
            navigate('/detail',{state:FilterItems})
            
        }
        else{
            alert('Enter correct password or email')
        }

        
    }

    const handleInput=(e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setFormData({...formData,[name]:value} )
    }


    return (
        <>
        
            <div className="container" id="login">
                <form className='form' onSubmit={handleSubmit}>
                    <div className='py-2 form-group'>
                        <label id='email'>Email</label>
                        <input id='email' type='email' value={formData.email}
                            className="form-control" name='email' placeholder='Enter the email ' onChange={handleInput} required />
                    </div>
                    <div className='py-2 form-group'>

                        <label id='confirmpassword'>confirm password</label>
                        <input type={confirmpasswordShown ? "text" : "password"} placeholder="Enter password" name='confirmPassword'
                            className="form-control" value={formData.confirmPassword} onChange={handleInput} required />
                        <a onClick={toggle}>{confirmpasswordShown ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                            </svg>}</a>
                    </div>
                    <button type="submit " className="btn btn-info d-flex" >Login</button>

                </form>
            </div>
        </>
    )
}

export default Login