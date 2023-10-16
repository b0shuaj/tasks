import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const toggleStudentStatus = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={toggleEditMode}
            />
            {editMode ? (
                <div>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                    />
                    <Form.Check
                        type="switch"
                        id="student-switch"
                        label="Student"
                        checked={isStudent}
                        onChange={toggleStudentStatus}
                    />
                </div>
            ) : (
                <div>
                    <p>
                        {userName} is{" "}
                        {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            )}
        </div>
    );
}
