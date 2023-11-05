import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const validationSchema = yup.object({
    firstAgreement: yup
        .boolean()
        .oneOf([true], 'First agreement is required'),
    secondAgreement: yup
        .boolean()
        .oneOf([true], 'Second agreement is required'),
});

function Agreement() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstAgreement: false,
            secondAgreement: false,
            thirdAgreement: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          navigate('/register');
        },
    });

    return (
        <div className="page">
            <div className='titleWrap'>
                Agreements
                <br/>
            </div>
            <div className='contentWrap'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="firstAgreement"
                            checked={formik.values.firstAgreement}
                            onChange={formik.handleChange}
                        />
                        {' '}First agreement (Required)
                    </label>
                    {formik.touched.firstAgreement && formik.errors.firstAgreement ? (
                        <div className="errorMessageWrap">{formik.errors.firstAgreement}</div>
                    ) : null}
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="secondAgreement"
                            checked={formik.values.secondAgreement}
                            onChange={formik.handleChange}
                        />
                        {' '}Second agreement (Required)
                    </label>
                    {formik.touched.secondAgreement && formik.errors.secondAgreement ? (
                        <div className="errorMessageWrap"> {formik.errors.secondAgreement}</div>
                    ) : null}
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="thirdAgreement"
                            checked={formik.values.thirdAgreement}
                            onChange={formik.handleChange}
                        />
                        {' '}Third agreement (Optional)
                    </label>
                </div>
                
                <Button type="submit">Confirm</Button>
            </form>
        </div>
        </div>
    );
}

export default Agreement;

