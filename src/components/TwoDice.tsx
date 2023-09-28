import React, { useState, useCallback } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());
    const [gameOutcome, setOutcome] = useState<string | null>(null);

    const rollLeftDie = useCallback(() => {
        const newLeftDie = d6();
        setLeftDie(newLeftDie);
        checkOutcome(newLeftDie, rightDie);
    }, [rightDie]);

    const rollRightDie = useCallback(() => {
        const newRightDie = d6();
        setRightDie(newRightDie);
        checkOutcome(leftDie, newRightDie);
    }, [leftDie]);

    const checkOutcome = (left: number, right: number) => {
        if (left !== right) {
            setOutcome(null); // Reset outcome if the numbers are not matching
        }

        if (left === 1 && right === 1) {
            setOutcome("You rolled snake eyes! You Lose!");
        } else if (left === right) {
            setOutcome("You rolled matching numbers! You Win!");
        }
    };

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button
                variant="primary"
                onClick={rollLeftDie}
                data-testid="roll-left-button"
            >
                Roll Left Die
            </Button>
            <Button
                variant="primary"
                onClick={rollRightDie}
                data-testid="roll-right-button"
            >
                Roll Right Die
            </Button>
            {gameOutcome && <p>{gameOutcome}</p>}
        </div>
    );
}
