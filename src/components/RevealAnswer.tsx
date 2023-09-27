import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isAnswerVisible, setVisibility] = useState(false);

    const toggle = () => {
        setVisibility(!isAnswerVisible);
    };
    return (
        <div>
            <Button onClick={toggle}>Reveal Answer</Button>
            {isAnswerVisible && <div>42</div>}
        </div>
    );
}
