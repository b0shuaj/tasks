import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum UIQuestionType {
    MultipleChoice = "Multiple Choice",
    ShortAnswer = "Short Answer"
}

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<UIQuestionType>(
        UIQuestionType.ShortAnswer
    );

    const handleChangeType = () => {
        setQuestionType((prevType) =>
            prevType === UIQuestionType.ShortAnswer
                ? UIQuestionType.MultipleChoice
                : UIQuestionType.ShortAnswer
        );
    };

    return (
        <div>
            <Button variant="primary" onClick={handleChangeType}>
                Change Type
            </Button>
            {questionType === UIQuestionType.MultipleChoice ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
