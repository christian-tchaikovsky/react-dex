import * as Yup from "yup";
import { IFields } from "@/modules/teams/interfaces/IAdd";

export const validationSchema = Yup.object<Record<keyof IFields, Yup.AnySchema>>({
    name: Yup.string()
        .trim()
        .required("Required")
        .matches(/^[a-zA-Z]+$/, "Invalid character entered")
        .min(5, "Login must be at least 5 characters")
        .max(24, "Login must be at most 24 characters"),
    division: Yup.string()
        .trim()
        .required("Required")
        .matches(/^[a-zA-Z0-9]+$/, "Invalid character entered")
        .min(5, "Password must be at least 5 characters")
        .max(24, "Password must be at most 24 characters"),
    foundationYear: Yup.number(),
    conference: Yup.string(),
    imageUrl: Yup.mixed().required("Required")
});
