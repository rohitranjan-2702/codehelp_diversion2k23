import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4000");

function TeacherDoubt() {
  const teacherId = JSON.parse(localStorage.getItem("user")).id;
  const authToken = localStorage.getItem("token");
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    socket.emit("teacherOnline", { teacherId });

    socket.on("moveToCall", (payload) => {
      const studentId = payload.studentId;
      const teacherId = payload.teacherId;
      console.log(`question answered ${studentId} ${teacherId}`);
      handleMoveToCall(studentId, teacherId);
      navigate("/video");
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

  const handleMoveToCall = async (studentId, teacherId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("teacherId", teacherId);
    urlencoded.append("studentId", studentId);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const result = await fetch(
      "http://localhost:5000/agora/CallCredentials",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));

    console.log(result);
    localStorage.setItem("video", JSON.stringify(result));
    return { result };
  }; //TODO: handle it

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
