import { useState } from "react";

export function useDoubleHalfState() {
    const [dhValue, setDhValue] = useState<number>(10);

    function getDhValue() {
        return dhValue;
    }

    function doubleValue() {
        setDhValue(dhValue * 2);
    }

    function halveValue() {
        setDhValue(dhValue / 2);
    }

    return {
        getDhValue,
        doubleValue,
        halveValue
    };
}
