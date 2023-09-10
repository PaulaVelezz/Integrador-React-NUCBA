import React from "react";
import {
  LoginContainerS,
  Form,
  RedirectionLtoR,
  LoginTopS,
  LgBoxOne,
  LgBoxTwo,
} from "./LoginStyles";

import { Formik } from "formik";
import { Link } from "react-router-dom";
import { loginIV } from "../../Formik/FormikInitialValues";
import { loginValidacion } from "../../Formik/FormikValidation";
import LoginInput from "../../components/UI/LoginInputs/LoginInput";
import Submit from "../../components/UI/Submit/Submit";
import { BsArrowRight } from "react-icons/bs";

const Login = () => {
  return (
    <LoginContainerS>
      <LgBoxOne>
        <LoginTopS>
          <Link to="/">
            <img src="images/Logo (3).png" alt="logo" />
          </Link>
          <h1>Inicia Sesión</h1>
        </LoginTopS>

        <Formik initialValues={loginIV} validationSchema={loginValidacion}>
          <Form>
            <LoginInput name="email" type="text" placeholder="Ingrese Email" />
            <LoginInput
              name="password"
              type="password"
              placeholder="Ingrese Contraseña"
            />

            <RedirectionLtoR to="/register">
              Todavía no tenes una cuenta?
              <Link to="/register">
                <span> Create una ahora! </span>
              </Link>
            </RedirectionLtoR>

            <Submit>Iniciar Sesión</Submit>
          </Form>
        </Formik>
      </LgBoxOne>

      <LgBoxTwo>
        <Link to="/">
          Volver atrás <BsArrowRight />
        </Link>
        <img src="images/3d-coffee.png" alt="cafe" />
      </LgBoxTwo>
    </LoginContainerS>
  );
};

export default Login;
