import { useState, useEffect, useRef, useContext } from "react";
import { io } from "socket.io-client";
import { LoginContext } from "../contexts/LoginContext";

const socket = io.connect("http://localhost:4000");

function StudentDoubt() {
  const studentId = JSON.parse(localStorage.getItem("user")).id;
  const [question, setQuestion] = useState("");
  const resultRef = useRef();
  useEffect(() => {
    socket.emit("studentConnected", { studentId });

    socket.on("moveToCall", (payload) => {
      if (studentId !== payload.studentId) {
        console.log(
          `studentId: ${studentId}, questionId: ${payload.studentId}`
        );
        throw new Error("questionid != studentid");
      }
      console.log(`question answered ${payload}`);
      resultRef.current.innerText = "Video call opening...";
      handleMoveToCall();
    });
  });
  const handleMoveToCall = () => {}; //TODO: handle it
  const sendQuestion = (e) => {
    e.preventDefault();
    socket.emit("questionAsked", { question, studentId });
    setQuestion("");
    resultRef.current.innerText = "Waiting for tutors to accept...";
  };

  return (
    <div className="App">
      <header className="App-header" ref={resultRef}>
        <form onSubmit={sendQuestion}>
          <input
            type="text"
            name="chat"
            placeholder="type question"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <button type="submit">ASK</button>
        </form>
      </header>
    </div>
  );
}

export default StudentDoubt;
