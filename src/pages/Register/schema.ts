import * as Yup from "yup";
import { IFields } from "@/models/IRegister";

export const validationSchema = Yup.object<Record<keyof IFields, Yup.AnySchema>>({
    login: Yup.string()
        .trim()
        .required("Required")
        .matches(/^[a-zA-Z]+$/, "Invalid character entered")
        .min(5, "Login must be at least 5 characters")
        .max(24, "Login must be at most 24 characters"),
    password: Yup.string()
        .trim()
        .required("Required")
        .matches(/^[a-zA-Z0-9]+$/, "Invalid character entered")
        .min(5, "Password must be at least 5 characters")
        .max(24, "Password must be at most 24 characters"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    userName: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z]+$/, "Invalid character entered")
        .min(2, "Name must be at least 5 characters")
        .max(24, "Name must be at most 24 characters"),
    agreement: Yup.boolean()
        .oneOf([true], "You must be accept the agreement")
});
