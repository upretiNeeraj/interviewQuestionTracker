import { useState } from "react";
import axios from "axios";

const AddQuestion = ({ fetchQuestions }) => {
    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5001/api/questions", {
            title,
            difficulty,
        });

        setTitle("");
        setDifficulty("");
        fetchQuestions();
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                placeholder="Question title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                placeholder="Difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
};

export default AddQuestion;
