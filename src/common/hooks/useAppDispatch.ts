import { useDispatch } from "react-redux";
import { AppDispatch } from "@/configs/redux/store";

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;
