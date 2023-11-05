import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Pages.css';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .matches(
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/,
            'Password must be 8-20 characters, and include at least one letter, one number, and one special character.'
        )
        .required('Password is required'),
});

function Login() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(values.email === 'test@gmail.com' && values.password === '1q2w3e4r5t!@') {
                alert('Welcome!');
            } else {
                alert('Please check your email and password');
            }
        },
    });

    return (
        <div className="page">
            <div className="titleWrap">
                Sign in to  your account
                <br/>
            </div>
            
            <div className="contentWrap">
                <div className="inputTitle">Email address</div>
                <div className="inputWrap">
                    <input 
                        type='text'
                        className="input" 
                        placeholder="test@gmail.com" 
                        name="email"
                        value={formik.values.email} 
                        onChange={formik.handleChange} 
                    />
                </div>
                <div className="errorMessageWrap">
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle" >
                    Password
                </div>
                <div className="inputWrap">
                    <input 
                        type='password'
                        className="input" 
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="errorMessageWrap">
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>
            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={formik.handleSubmit}>
                    Login
                </Button>
                <Button variant="secondary" size="lg" onClick={() => navigate('/agree')}>
                    Join us
                </Button>
            </div>
        </div>
    );
}

export default Login;