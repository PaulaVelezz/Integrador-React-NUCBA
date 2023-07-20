import React from 'react'
import { RedirectionRtoL, RegisterContainerS, RegisterTopS, Form } from './RegisterStyles';

import { Formik } from "formik";
import Submit from "../../components/UI/Submit/Submit";
import { Link } from "react-router-dom";
import { registerIV } from "../../Formik/FormikInitialValues";
import { registerValidacion } from "../../Formik/FormikValidation";

import LoginInput from "../../components/UI/LoginInputs/LoginInput";


const Register = () => {
  return (
    <RegisterContainerS>
      <RegisterTopS>
        <img src="images/Logo (3).png" alt="logo" />
        <h1>Registrarse</h1>
      </RegisterTopS>

      <Formik
        initialValues={registerIV}
        validationSchema={registerValidacion}
      >
        <Form>
        <LoginInput name="name" type="text" placeholder="Ingrese Nombre"/> 
        <LoginInput name="email" type="text" placeholder="Ingrese Email"/>
        <LoginInput name="password" type="password" placeholder="Ingrese Contraseña"/>  

        <RedirectionRtoL>
          Ya tenes una cuenta creada?
            <Link to="/login"> 
            <span>Iniciar Sesión</span>
            </Link>
        </RedirectionRtoL>

        <Submit>Crear Cuenta</Submit>
      </Form>
      </Formik>
    </RegisterContainerS>
  );
};

export default Register;