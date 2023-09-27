import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());
    const [gameOutcome, setOutcome] = useState<string | null>(null);

    const rollLeftDie = () => {
        const newLeftDie = d6();
        setLeftDie(newLeftDie);
        checkOutcome(newLeftDie, rightDie);
    };

    const rollRightDie = () => {
        const newRightDie = d6();
        setRightDie(newRightDie);
        checkOutcome(leftDie, newRightDie);
    };

    const checkOutcome = (left: number, right: number) => {
        if (left === 1 && right === 1) {
            setOutcome("You rolled snake eyes! You Lose!");
        } else if (left === right) {
            setOutcome("You rolled matching numbers! You Win!");
        } else {
            setOutcome(null);
        }
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button variant="primary" onClick={rollLeftDie}>
                Roll Left Die
            </Button>
            <Button variant="primary" onClick={rollRightDie}>
                Roll Right Die
            </Button>
            {gameOutcome && <p>{gameOutcome}</p>}
        </div>
    );
}
