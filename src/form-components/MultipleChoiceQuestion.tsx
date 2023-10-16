import React, { useState, useEffect } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        if (selectedOption === expectedAnswer) {
            setResult("✔️ Correct!");
        } else {
            setResult("❌ Incorrect.");
        }
    }, [selectedOption, expectedAnswer]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                <option value="" disabled>
                    Select an option
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{result}</div>
        </div>
    );
}
