import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

function FormikForm() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);
    const initialValues = {
        firstname: "",
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    };
    const onSubmit = values => {
        console.log('form data', values)
    };

    const validationSchema = Yup.object({
        firstname: Yup.string().required('Required!'),
        email: Yup.string()
            .email('Invalid email format!')
            .required('Required!'),
        phoneNumber: Yup.string().required('Required!'),
        password: Yup.string().required('Required!'),
        confirmPassword: Yup.string().required('Required!')
    })
    // console.log('formik values', formik.values);
    // console.log('visited filed', formik.touched);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const toggle = () => {
        setConfirmPasswordShown(!confirmpasswordShown)
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

            <Form >
                <div className=' d-flex flex-column  justify-content-start align-items-start py-2'>
                    <label id='firstName '>FirstName</label>
                    <Field id='firstName ' type='text' className="" name='firstname'/>
                    <ErrorMessage name='firstname' />
                </div>
                <div className='d-flex flex-column  justify-content-start align-items-start  py-2'>
                    <label id='email'>Email</label>
                    <Field id='email' type='email' className="" name='email' />
                    <ErrorMessage name='email' />
                </div>
                <div className='d-flex flex-column  justify-content-start align-items-start py-2 '>
                    <label id='number'>phoneNumber</label>
                    <Field id='number' type='number' className="" name='phoneNumber' />
                     <ErrorMessage name='phoneNumber'/>
                </div>
                <div className='d-flex flex-column  justify-content-start align-items-start  py-2 '>
                    <label id='password'> password</label>
                    <Field id="password" type={passwordShown ? "text" : "password"}  className="" name='password'  />
                    <a onClick={togglePassword}>{passwordShown ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill position-relative top--28 right-220" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-slash-fill position-relative top- -28 right-220" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                        </svg>}</a>
                        <ErrorMessage name='password'/>
                </div>

                <div className='d-flex flex-column  justify-content-start align-items-start py-2 '>
                    <label id='confirmpassword'>confirm password</label>
                    <Field type={confirmpasswordShown ? "text" : "password"}  name='confirmPassword'className="" />
                    <a  onClick={toggle}>{confirmpasswordShown ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                        </svg>}</a>
                     <ErrorMessage name='confirmPassword' />
                </div>
                <button type="submit" className="btn btn-info d-flex" >submit</button>
            </Form>
        </Formik>
    )

}

export default FormikForm