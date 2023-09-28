import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Diwali = "🪔",
    Halloween = "🎃",
    DragonBoatFestival = "🎏",
    Christmas = "🎄",
    NewYear = "🎉"
}

export function CycleHoliday(): JSX.Element {
    const holidaysByYear: Holiday[] = [
        Holiday.Diwali,
        Holiday.Halloween,
        Holiday.DragonBoatFestival,
        Holiday.Christmas,
        Holiday.NewYear
    ];

    const sortedHolidaysAlphabetically: Holiday[] =
        Object.values(Holiday).sort();

    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);

    const handleAdvanceByYear = () => {
        const nextIndex = (currentHolidayIndex + 1) % holidaysByYear.length;
        setCurrentHolidayIndex(nextIndex);
    };

    const handleAdvanceAlphabetically = () => {
        const currentHoliday = holidaysByYear[currentHolidayIndex];
        const nextIndex =
            sortedHolidaysAlphabetically.indexOf(currentHoliday) + 1;
        const nextHolidayIndex =
            nextIndex >= sortedHolidaysAlphabetically.length ? 0 : nextIndex;
        const nextHoliday = sortedHolidaysAlphabetically[nextHolidayIndex];

        setCurrentHolidayIndex(holidaysByYear.indexOf(nextHoliday));
    };

    return (
        <div>
            <div>Holiday: {holidaysByYear[currentHolidayIndex]}</div>
            <Button variant="primary" onClick={handleAdvanceByYear}>
                Advance by Year
            </Button>

            <Button variant="primary" onClick={handleAdvanceAlphabetically}>
                Advance Alphabetically
            </Button>
        </div>
    );
}
