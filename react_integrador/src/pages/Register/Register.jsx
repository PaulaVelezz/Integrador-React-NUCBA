import React from "react";
import {
  RedirectionRtoL,
  RegisterContainerS,
  RegisterTopS,
  Form,
  RgBoxOne,
  RgBoxTwo,
} from "./RegisterStyles";

import { Formik } from "formik";
import Submit from "../../components/UI/Submit/Submit";
import { Link } from "react-router-dom";
import { registerIV } from "../../Formik/FormikInitialValues";
import { registerValidacion } from "../../Formik/FormikValidation";

import LoginInput from "../../components/UI/LoginInputs/LoginInput";
import { BsArrowRight } from "react-icons/bs";

const Register = () => {
  return (
    <RegisterContainerS>
      <RgBoxOne>
        <RegisterTopS>
          <Link to="/">
            <img src="images/Logo (3).png" alt="logo" />
          </Link>
          <h1>Registrarse</h1>
        </RegisterTopS>

        <Formik
          initialValues={registerIV}
          validationSchema={registerValidacion}
        >
          <Form>
            <LoginInput name="name" type="text" placeholder="Ingrese Nombre" />
            <LoginInput name="email" type="text" placeholder="Ingrese Email" />
            <LoginInput
              name="password"
              type="password"
              placeholder="Ingrese Contraseña"
            />

            <RedirectionRtoL>
              Ya tenes una cuenta creada?
              <Link to="/login">
                <span>Iniciar Sesión</span>
              </Link>
            </RedirectionRtoL>

            <Submit>Crear Cuenta</Submit>
          </Form>
        </Formik>
      </RgBoxOne>

      <RgBoxTwo>
        <Link to="/">
          Volver atrás <BsArrowRight />
        </Link>
        <img src="images/3dpack.png" alt="cafe" />
      </RgBoxTwo>
    </RegisterContainerS>
  );
};

export default Register;
