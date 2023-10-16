import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "purple",
        "orange",
        "pink",
        "teal",
        "brown"
    ];

    const [selected, setSelected] = useState(colors[0]);

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <form>
                {colors.map((color) => (
                    <label key={color} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            value={color}
                            checked={selected === color}
                            onChange={handleColorChange}
                        />
                        {color}
                    </label>
                ))}
            </form>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selected,
                    marginTop: "10px"
                }}
            >
                {selected}
            </div>
        </div>
    );
}
