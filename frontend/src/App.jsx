import { useEffect, useState } from "react";
import axios from "axios";
import AddQuestion from "./components/AddQuestion";
import QuestionList from "./components/QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const res = await axios.get("http://localhost:5001/api/questions");
    setQuestions(res.data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Interview Question Tracker</h2>
      <AddQuestion fetchQuestions={fetchQuestions} />
      <QuestionList questions={questions} fetchQuestions={fetchQuestions} />
    </div>
  );
}

export default App;
