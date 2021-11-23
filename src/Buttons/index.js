import React from "react";
import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <StyledButtons>
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
    </StyledButtons>
);

export default Buttons;