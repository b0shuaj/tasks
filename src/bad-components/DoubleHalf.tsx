import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

export function DoubleHalf(): JSX.Element {
    const { getDhValue, doubleValue, halveValue } = useDoubleHalfState();
    const dhValue = getDhValue();

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={doubleValue}>Double</Button>
            <Button onClick={halveValue}>Halve</Button>
        </div>
    );
}
