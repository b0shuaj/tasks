import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const requested = parseInt(requestedAttempts, 10);
        if (!isNaN(requested)) {
            setAttemptsLeft(attemptsLeft + requested);
            setRequestedAttempts("");
        }
    };

    const isUseButtonDisabled = attemptsLeft === 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <button onClick={handleUseAttempt} disabled={isUseButtonDisabled}>
                Use
            </button>
            <input
                type="number"
                placeholder="Enter additional attempts"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
            />
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
