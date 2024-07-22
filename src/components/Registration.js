import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './Redux/Action';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'

function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state => state);

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);
    const [errors, setErrors] = useState({})
    const [fE, setFe] = useState(false)


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
    const validate = values => {
        let errors = {}
        if (!values.firstname) {
            errors.firstname = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'invaild email format'
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'Required'

        }
        if (!values.password) {
            errors.password = 'Required'

        }
        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required'
        }
        return errors
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().required('Required!'),
        email: Yup.string()
            .email('Invalid email format!')
            .required('Required!'),
        phoneNumber: Yup.string().required('Required!'),
        password: Yup.string().required('Required!'),
        confirmPassword: Yup.string().required('Required!')
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
        validationSchema,
    })

    console.log('formik values', formik.values);
    console.log('visited filed', formik.touched);

    // const [formData, setFormData] = useState({
    //     firstname: "",
    //     email: "",
    //     phoneNumber: "",
    //     password: "",
    //     confirmPassword: "",

    // const validate = (name, value) => {
    //     console.log(name, value);

    //     switch (name) {
    //         case 'firstname':
    //             if (value.length <= 4) {
    //                 // we will set the error state

    //                 setErrors({
    //                     ...errors,
    //                     firstname: 'Username atleast have 5 letters'
    //                 })
    //             } else {
    //                 // set the error state empty or remove the error for username input

    //                 //omit function removes/omits the value from given object and returns a new object
    //                 // let newObj = omit(errors, "username");
    //                 setErrors({
    //                     ...errors,
    //                     firstname: ""
    //                 });

    //             }
    //             break;
    //     }

    // }



    // const handleChange = (e) => {
    //     // const name = e.target.name;
    //     // const value = e.target.value;
    //     const { name, value } = e.target;
    //     // console.log(name)
    //     // console.log(value)
    //     validate(name, value)
    //     setFormData({ ...formData, [name]: value })
    //     console.log(formData)

    // }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const toggle = () => {
        setConfirmPasswordShown(!confirmpasswordShown)
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (formData.firstname !== "" && formData.email != "" && formData.phoneNumber !== "" && formData.password !== "" && formData.confirmPassword !== "" && formData.password === formData.confirmPassword) {
    //         dispatch(setUser(formData))

    //         navigate("/login")
    //         setFormData({
    //             firstname: "",
    //             email: "",
    //             phoneNumber: "",
    //             password: "",
    //             confirmPassword: "",
    //         })
    //     }
    //     // else if(formData.firstname==""&&formData.firstname.length<4 ){

    //     // }

    //     // if (formData.firstname.length<4 ) {
    //     //     setFe(true)
    //     // }

    //     // else if (formData.email == "") {

    //     //     if( !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(formData.email)){
    //     //         setErrors({
    //     //             ...errors,
    //     //             email: '**please  enter  correct email'
    //     //         })

    //     //     setErrors({
    //     //         ...errors,
    //     //         email: '**please  enter the email'
    //     //     })
    //     // }
    //     //     else if(formData.email !== ""){
    //     //         setErrors({
    //     //             ...errors,
    //     //             email: ''
    //     //         })

    //     //     }

    //     // }
    //     // else if(formData.phoneNumber == "" ){
    //     //     setErrors({
    //     //         ...errors,
    //     //         phoneNumber: '**please  enter the phoneNumber'
    //     //     })

    //     // }


    //     // else {
    //     //     setErrors({
    //     //         ...errors,
    //     //         firstname: "",
    //     //         email:"",
    //     //         phoneNumber:""
    //     //     });
    //     //     alert("enter correct password")

    //     // }


    //     else {
    //         alert("enter all values")


    //     }
    // }

    return (
        <div className='container form control' >
            <form className='form' onSubmit={formik.handleSubmit}>
                <div className='py-2 form-group'>
                    <label id='firstName d-flex'>FirstName</label>
                    <input id='firstName ' type='text'
                        className="form-control" name='firstname' placeholder='Enter the name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname} />
                    {formik.touched.firstname && formik.errors.firstname ? (<h2 style={{ color: "red" }}>{formik.errors.firstname}</h2>) : null}

                </div>
                <div className='py-2 form-group'>
                    <label id='email'>Email</label>
                    <input id='email' type='email' value={formik.values.email}
                        className="form-control" name='email' placeholder='Enter the email '
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (<h2 style={{ color: "red" }}>{formik.errors.email}</h2>) : null}

                </div>
                <div className='form-group py-2 '>
                    <label id='number'>phoneNumber</label>
                    <input id='number' type='number' 
                     value={formik.values.phoneNumber}
                        className="form-control" name='phoneNumber' placeholder='Enter the phone number' onChange={formik.handleChange}
                        onBlur={formik.handleBlur} min="8" max="10"
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<h2 style={{ color: "red" }}>{formik.errors.phoneNumber}</h2>) : null}

                </div>
                <div className='form-group py-2 '>
                    <label id='password'> password</label>
                    <input id="password" type={passwordShown ? "text" : "password"} value={formik.values.password}
                        className="form-control" name='password' placeholder='Enter password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <a onClick={togglePassword}>{passwordShown ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                    </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                        </svg>}</a>
                    {formik.touched.password && formik.errors.password ? (<h2 style={{ color: "red" }}>{formik.errors.password}</h2>) : null}

                </div>

                <div className='py-2 form-group'>
                    <label id='confirmpassword'>confirm password</label>
                    <input type={confirmpasswordShown ? "text" : "password"} placeholder="Enter password" name='confirmPassword'
                        className="form-control" value={formik.values.confirmPassword} onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<h2 style={{ color: "red" }}>{formik.errors.confirmPassword}</h2>) : null}

                </div>

                <button type="submit" className="btn btn-info d-flex" >submit</button>


            </form>
        </div>
    )


}

export default Registration