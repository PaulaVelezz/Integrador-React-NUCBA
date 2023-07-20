import React from 'react';

import {InputContainerS, LoginInputS, ErrorMsgS } from "./LoginInputStyles";

import { Field, ErrorMessage } from 'formik';


const LoginInput = ({ name, type, placeholder }) => {

  return (
    <Field name={name}>

      {({ field, form: {errors, touched }}) => {
        <InputContainerS>
        <LoginInputS
          type={type}
          placeholder={placeholder}
          {...field}
          isError={errors[field.name] && touched[field.name]}
        />

        <ErrorMessage name={field.name}>
          {(message) => <ErrorMsgS>{message}</ErrorMsgS>}
        </ErrorMessage>
        </InputContainerS>
      }}
    </Field>
  );
};

export default LoginInput;