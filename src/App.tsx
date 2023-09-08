import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import hank from "../src/nohohank.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h2>Joshua Babbitt : A Really Cool Student</h2>

            <ul>
                A List of Recent Songs I Enjoy!
                <li>Problemz - Jungle</li>
                <li>Souk Eye - Gorillaz</li>
                <li>Lavender Buds - MF DOOM</li>
            </ul>
            <img
                src={hank}
                width="650"
                height="400"
                alt="A character from Barry, NoHo Hank (my beloved)"
            />
            <p>&nbsp;</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        Left
                        <p>&nbsp;</p>
                        <svg width="100" height="50">
                            <rect width="100" height="50" fill="red" />
                        </svg>
                    </Col>
                    <Col>
                        Right
                        <p>&nbsp;</p>
                        <svg width="100" height="50">
                            <rect width="100" height="50" fill="red" />
                        </svg>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
