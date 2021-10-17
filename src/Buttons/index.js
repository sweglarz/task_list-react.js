import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    disabled={tasks.some(({ done }) => done)}
                    className="buttons__button"> {tasks.some(({ done }) => done) && hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>

                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                    >Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);


export default Buttons;