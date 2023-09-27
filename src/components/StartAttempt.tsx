import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const originalAttempts = 4;
    const [attempts, setAttempts] = useState(originalAttempts);
    const [inProgress, setInProgress] = useState(false);

    const startQuiz = () => {
        if (attempts > 0) {
            setInProgress(true);
            setAttempts(attempts - 1);
        }
    };

    const stopQuiz = () => {
        setInProgress(false);
        setAttempts(originalAttempts);
    };

    const mulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            <p>Attempts: {attempts}</p>
            <p>Quiz is {inProgress ? "in progress" : "not in progress"}</p>
        </div>
    );
}
