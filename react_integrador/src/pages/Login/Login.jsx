import React from 'react';
import {LoginContainerS, Form, RedirectionLtoR, LoginTopS } from "./LoginStyles";

import { Formik } from "formik";
import { Link } from "react-router-dom";
import { loginIV } from "../../Formik/FormikInitialValues";
import { loginValidacion } from "../../Formik/FormikValidation";
import LoginInput from "../../components/UI/LoginInputs/LoginInput";
import Submit from "../../components/UI/Submit/Submit";


const Login = () => {
  return (
    <LoginContainerS>
      <LoginTopS>
        <Link to='/'>
          <img src="images/Logo (3).png" alt="logo" />
        </Link>
        <h1>Inicia Sesión</h1>
      </LoginTopS>

      <Formik
        initialValues={loginIV}
        validationSchema={loginValidacion}
      > 
        <Form>
          <LoginInput name="email" type="text" placeholder="Ingrese Email" />
          <LoginInput name="password" type="password" placeholder="Ingrese Contraseña" />
        

          <RedirectionLtoR 
            to="/register">
            Todavia no tenes una cuenta?
              <Link to="/register">
                <span> Create una ahora! </span>
              </Link>
          </RedirectionLtoR>

          <Submit>Iniciar Sesión</Submit>
        </Form>
      </Formik>
    </LoginContainerS>
  );
};

export default Login;