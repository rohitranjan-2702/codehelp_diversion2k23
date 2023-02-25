import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function TeacherDoubt() {
  const teacherId = JSON.parse(localStorage.getItem("user")).id;
  console.log(teacherId);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    socket.emit("teacherOnline", { teacherId });

    socket.on("moveToCall", (payload) => {
      const studentId = payload.studentId;
      const teacherId = payload.teacherId;
      console.log(`question answered ${studentId} ${teacherId}`);
      handleMoveToCall(studentId, teacherId);
    });

    socket.on("questionAvailable", (payload) => {
      const studentId = payload.studentId;
      const question = payload.question;

      setQuestions([...questions, { studentId, question }]);
    });

    return () => {
      socket.emit("teacherOffline");
    };
  });

  const handleMoveToCall = (studentId, teacherId) => {}; //TODO: handle it
  const handleAnswer = (e, studentId) => {
    e.preventDefault();
    socket.emit("questionAccepted", { studentId, teacherId });
    setQuestions([]);
  }; //TODO: handle it
  const handleDecline = (e, studentId) => {
    e.preventDefault();
    setQuestions(
      questions.filter((question) => {
        if (question.studentId === studentId) {
          return false;
        }
      })
    );
  }; //TODO: handle it

  return (
    <div className="App">
      <header className="App-header">
        {questions.map((questionObj) => {
          return (
            <div
              className="question"
              key={questionObj.studentId}
              studentId={questionObj.studentId}
            >
              <input
                type="text"
                name="chat"
                placeholder="type question"
                value={questionObj.question}
                readOnly={true}
              />
              <button onClick={(e) => handleAnswer(e, questionObj.studentId)}>
                Answer
              </button>
              <button onClick={(e) => handleDecline(e, questionObj.studentId)}>
                Decline
              </button>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default TeacherDoubt;
