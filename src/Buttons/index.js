import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button 
                    onClick = {toggleHideDone}
                    disabled={tasks.every(({ done }) => done)}
                    className="buttons__button"
                > 
                {tasks.some(({ done }) => done) && hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>

                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);


export default Buttons;