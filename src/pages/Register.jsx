import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import './Pages.css'

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
    confirmPassword: yup
        .string('Confirm your password')
        .required('Password confirmation is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    name: yup
        .string('Enter your name')
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required('Name is required'),
    nickname: yup
        .string('Enter your nickname')
        .required('Nickname is required'),
    birthDate: yup
        .date('Enter your birthdate')
        .required('Birthdate is required')
});

function Register() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            nickname: '',
            birthDate: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert('Congratulations');
        },
    });

    return (
        <div className="page">     
            <div className="titleWrap">
                Sign in to  your account
                <br/>
            </div>       
            <form className="contentWrap" onSubmit={formik.handleSubmit}>
                <label className="inputTitle" htmlFor="email">Email Address:</label>
                <div className="inputWrap">
                    <input name="email" 
                    type="email" 
                    className="input" 
                    {...formik.getFieldProps('email')} />
                </div>
                {formik.touched.email && formik.errors.email ? <div className="errorMessageWrap">{formik.errors.email}</div> : null}

                <label className="inputTitle" htmlFor="password">Password:</label>
                <div className="inputWrap">
                    <input name="password" 
                    type="password" 
                    className="input" 
                    {...formik.getFieldProps('password')} />
                </div>
                {formik.touched.password && formik.errors.password ? <div className="errorMessageWrap">{formik.errors.password}</div> : null}

                <label className="inputTitle" htmlFor="confirmPassword">Confirm Password:</label>
                <div className="inputWrap">
                    <input name="confirmPassword"
                     type="password" 
                     className="input" 
                     {...formik.getFieldProps('confirmPassword')} />
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="errorMessageWrap">{formik.errors.confirmPassword}</div> : null}

                <label className="inputTitle" htmlFor="name">Name:</label>
                <div className="inputWrap">
                    <input name="name" 
                    type="text"
                    className="input" 
                    {...formik.getFieldProps('name')} />
                </div>
                {formik.touched.name && formik.errors.name ? <div className="errorMessageWrap">{formik.errors.name}</div> : null}

                <label className="inputTitle" htmlFor="nickname">Nickname:</label>
                <div className="inputWrap">
                    <input name="nickname"
                     type="text"
                     className="input" 
                    {...formik.getFieldProps('nickname')} />
                </div>
                {formik.touched.nickname && formik.errors.nickname ? <div className="errorMessageWrap">{formik.errors.nickname}</div> : null}

                <label className="inputTitle" htmlFor="birthDate">Birthdate:</label>
                <div className="inputWrap">
                    <input name="birthDate"
                     type="date" 
                     className="input" 
                     {...formik.getFieldProps('birthDate')} />
                </div>
                {formik.touched.birthDate && formik.errors.birthDate ? <div className="errorMessageWrap">{formik.errors.birthDate}</div> : null}
                <br/>
               
                <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                Create Account 
                </Button>
            </div>
            </form>
        </div>
    );
}

export default Register;