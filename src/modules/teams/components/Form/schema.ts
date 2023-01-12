import * as Yup from "yup";
import { IFields } from "@/modules/teams/interfaces/IActions";

export const validationSchema = Yup.object<Record<keyof IFields, Yup.AnySchema>>({
    name: Yup.string()
        .trim()
        .required("Required"),
    division: Yup.string()
        .trim()
        .required("Required"),
    foundationYear: Yup.number()
        .nullable()
        .transform(value => value || null)
        .required("Required")
        .min(1950, "Year must be greater than 1950")
        .max(2050, "Year must be less than 1950"),
    conference: Yup.string()
        .trim()
        .required("Required"),
    imageUrl: Yup.string()
        .required("Required")
});
