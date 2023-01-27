import * as Yup from "yup";
import { IFields } from "@/modules/teams/interfaces/ITeams";
import moment from "moment";

const currentYear = moment().year();

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
        .max(currentYear, `Year must be less than ${currentYear}`),
    conference: Yup.string()
        .trim()
        .required("Required"),
    imageUrl: Yup.string()
        .required("Required")
});
