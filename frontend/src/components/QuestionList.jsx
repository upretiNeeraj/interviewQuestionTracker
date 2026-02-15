import axios from "axios";

const QuestionList = ({ questions, fetchQuestions }) => {
    const deleteHandler = async (id) => {
        await axios.delete(`http://localhost:5001/api/questions/${id}`);
        fetchQuestions();
    };

    return (
        <div>
            {questions.map((q) => (
                <div key={q._id}>
                    {q.title} - {q.difficulty}
                    <button onClick={() => deleteHandler(q._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default QuestionList;
