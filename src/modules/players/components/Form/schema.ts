import * as Yup from "yup";
import { IFields } from "@/modules/players/interfaces/IPlayers";
import moment from "moment";

const number = Yup.number().nullable().transform(value => !isNaN(value) ? value : null).required("Required");
const object = Yup.object().nullable().required("Required");
const string = Yup.string().trim().required("Required");

export const validationSchema = Yup.object<Record<keyof IFields, Yup.AnySchema>>({
    avatarUrl: string,
    name: string,
    position: object,
    team: object,
    height: number.min(1, "Height must be greater than 1").max(999, `Height must be less than 999`),
    weight: number.min(1, "Weight must be greater than 1").max(999, `Weight must be less than 999`),
    birthday: Yup.string()
        .test("date_valid", "Wrong date", (value) => {
            const date = moment(value, "YYYY-MM-DD", true);
            const current = moment();
            const min = "1950-01-01";

            return date.isValid() && date.isBefore(current) && date.isAfter(min);
        })
        .required("Required"),
    number: number.min(1, "Number must be greater than 1").max(999, `Number must be less than 999`)
});
