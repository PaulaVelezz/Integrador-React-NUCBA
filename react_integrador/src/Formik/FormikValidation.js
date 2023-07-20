import * as Yup from "yup";
import {reqsEmail} from "../utils/reqsEmail";

export const loginValidacion = Yup.object({
    email: Yup.string()
    .matches(reqsEmail, "Email invalido")
    .required("Campo Obligatorio"),

    password: Yup.string().min(7, "Minimo 7 caracteres").required("Campo Obligatorio"),

});


export const registerValidacion = Yup.object({
    name: Yup.string().required("Campo Obligatorio"),
    email: Yup.string()
    .matches(reqsEmail, "Email invalido")
    .required("Campo Obligatorio"),

    password: Yup.string().min(7, "Minimo 7 caracteres").required("Campo Obligatorio"),

});