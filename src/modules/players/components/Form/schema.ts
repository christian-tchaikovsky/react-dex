import * as Yup from "yup";
import { IFields } from "@/modules/players/interfaces/IPlayers";
import { daysInMonth } from "@/common/utils/daysInMonth";
import moment from "moment";

const number = Yup.number().nullable().transform(value => value || null).required("Required");
const object = Yup.object().nullable().required("Required");
const string = Yup.string().trim().required("Required");

export const validationSchema = Yup.object<Record<keyof IFields, Yup.AnySchema>>({
    avatarUrl: string,
    name: string,
    position: object,
    team: object,
    height: number,
    weight: number,
    birthday: Yup.string()
        .test("date_valid", "Wrong date", (value) => {
            const currentYear = moment().year();
            const date = moment(value).get("date");
            const year = moment(value).get("year");
            const month = moment(value).get("month");

            return month >= 0 && month <= 11 &&
                year >= 1900 && year <= currentYear &&
                date >= 1 && date <= daysInMonth(month, year);
        })
        .required("Required"),
    number
});
