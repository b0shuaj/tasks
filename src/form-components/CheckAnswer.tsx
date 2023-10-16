import React, { useState, useEffect } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");
    const [result, setResult] = useState(false);

    useEffect(() => {
        // Check the answer whenever the expected answer or user's answer changes.
        if (userAnswer.trim() === expectedAnswer.trim()) {
            setResult(true);
        } else {
            setResult(false);
        }
    }, [userAnswer, expectedAnswer]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                placeholder="Enter your answer"
                value={userAnswer}
                onChange={handleInputChange}
            />
            {result === true ? (
                <div>✔️ Correct!</div>
            ) : result === false ? (
                <div>❌ Incorrect. Try again.</div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
