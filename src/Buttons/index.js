import React from "react";
import { BoxOfButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <BoxOfButtons>
        {tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
                >
                    {tasks.some(({ done }) => done) && hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>

                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </BoxOfButtons>
);


export default Buttons;