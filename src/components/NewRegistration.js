import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'

function NewRegistration() {
   

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);
    const [errors, setErrors] = useState({})
    const [fE, setFe] = useState(false)


    const initialValues = {
        id:"",
        firstname: "",
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    };
    const onSubmit = values => {
        console.log('form data', values)
    };
    

    const validationSchema=Yup.object({
        id:Yup.string().required('Required').matches('(PT|PTIN)[1-9][0-9]{0,3}$','Pattern must be PT|PTIN match'),
firstname:Yup.string().required('Required!').matches('^[A-Za-z]{1,20}(.|\s){0,1}[A-Za-z]{2,20}$','enter  correct name'),
email:Yup.string().matches('^[A-za-z0-9.%+-]+@[a-z0-9.-]+\.(com|in)$','Invalid email format!')
.required('Required!'),
phoneNumber:Yup.string().required('Required!').matches('^[6-9][0-9]{9}$','Invalid phone number')
,
password:Yup.string().required('Required!').matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$','password must be one upper-case & one lower-case& letter & one special-character '),
confirmPassword:Yup.string().oneOf([Yup.ref('password'),''],'pasword must match').required('Required!')
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema,
    })

    console.log('formik values', formik.values);
    console.log('visited filed',formik.touched);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const toggle = () => {
        setConfirmPasswordShown(!confirmpasswordShown)
    };

    return (
        <div className='container form control' >
            <form className='form' onSubmit={formik.handleSubmit}>
            <div className='py-2 form-group'>
                    <label id='ptid d-flex'>id</label>
                    <input id='ptid' type='text'
                        className="form-control" name='id' placeholder='Enter Id'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.firstname} 
                        {...formik.getFieldProps('id')}/>
                    {formik.touched.id&&formik.errors.id ? (<h2 style={{ color: "red" }}>{formik.errors.id}</h2>) : null}

                </div>
                <div className='py-2 form-group'>
                    <label id='firstName d-flex'>FirstName</label>
                    <input id='firstName ' type='text'
                        className="form-control" name='firstname' placeholder='Enter the name'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.firstname} 
                        {...formik.getFieldProps('firstname')}/>
                    {formik.touched.firstname&&formik.errors.firstname ? (<h2 style={{ color: "red" }}>{formik.errors.firstname}</h2>) : null}

                </div>
                <div className='py-2 form-group'>
                    <label id='email'>Email</label>
                    <input id='email' type='email' 
                        className="form-control" name='email' placeholder='Enter the email '
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.email}
                        {...formik.getFieldProps('email')}

                    />
                    {formik.touched.email&&formik.errors.email ? (<h2 style={{ color: "red" }}>{formik.errors.email}</h2>) : null}

                </div>
                <div className='form-group py-2 '>
                    <label id='number'>phoneNumber</label>
                    <input id='number' type='number' 
                        className="form-control" name='phoneNumber' placeholder='Enter the phone number' 
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.phoneNumber}
                        {...formik.getFieldProps('phoneNumber')}
                    />
                    {formik.touched.phoneNumber &&formik.errors.phoneNumber ? (<h2 style={{ color: "red" }}>{formik.errors.phoneNumber}</h2>) : null}

                </div>
                <div className='form-group py-2 '>
                    <label id='password'> password</label>
                    <input id="password" type={passwordShown ? "text" : "password"} 
                        className="form-control" name='password' placeholder='Enter password'
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.password}
                        {...formik.getFieldProps('password')}

                    />
                    <a onClick={togglePassword}>{passwordShown ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                        </svg>}</a>
                    {formik.touched.password&&formik.errors.password ? (<h2 style={{ color: "red" }}>{formik.errors.password}</h2>) : null}

                </div>

                <div className='py-2 form-group'>
                    <label id='confirmpassword'>confirm password</label>
                    <input type={confirmpasswordShown ? "text" : "password"} placeholder="Enter password" name='confirmPassword'
                        className="form-control" 
                        // value={formik.values.confirmPassword} 
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        {...formik.getFieldProps('confirmPassword')}   
                        />
                    <a onClick={toggle}>{confirmpasswordShown ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                        </svg>}</a>
                    {formik.touched.confirmPassword &&formik.errors.confirmPassword ? (<h2 style={{ color: "red" }}>{formik.errors.confirmPassword}</h2>) : null}

                </div>

                <button type="submit" className="btn btn-info d-flex" >submit</button>


            </form>
        </div>
    )


}

export default NewRegistration