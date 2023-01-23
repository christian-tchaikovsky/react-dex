import { useLayoutEffect, useState } from "react";
import { desktop, mobile, tablet } from "@/common/constants/queries";

export type IMediaQuery = string[];

export type IMatchedMedia = boolean[];

const media = [
    mobile,
    tablet,
    desktop
];

export function useMatchMedia (queries: IMediaQuery = media, defaultValues: IMatchedMedia = []): IMatchedMedia {
    // initial value
    const initialValues = defaultValues.length ? defaultValues : Array(queries.length).fill(false);

    if (typeof window === "undefined") return initialValues;

    const mediaQueryLists = queries.map(q => matchMedia(q));

    const getValue = (): IMatchedMedia => mediaQueryLists.map(mql => mql.matches); // Return the value for the given queries

    // State and setter for matched value
    const [value, setValue] = useState(getValue);

    useLayoutEffect(() => {
        const handler = (): void => setValue(getValue);
        // Set a listener for each media query with above handler as callback.
        mediaQueryLists.forEach(mql => mql.addEventListener("change", handler));
        // Remove listeners on cleanup
        return (): void => {
            mediaQueryLists.forEach(mql => mql.removeEventListener("change", handler));
        };
    }, []);

    return value;
}
