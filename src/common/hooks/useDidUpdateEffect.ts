import { useEffect, useRef } from "react";

export function useDidUpdateEffect(fn: () => void, inputs: any[]): void {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }

        fn();
    }, inputs);
}
