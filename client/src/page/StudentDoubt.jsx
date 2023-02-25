import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { LoginContext } from "../contexts/LoginContext";

const socket = io.connect("http://localhost:4000");

function StudentDoubt() {
  const studentId = JSON.parse(localStorage.getItem("user")).id;
  const authToken = localStorage.getItem("token");
  const [question, setQuestion] = useState("");
  const resultRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    socket.emit("studentConnected", { studentId });

    socket.on("moveToCall", async (payload) => {
      if (studentId !== payload.studentId) {
        console.log(
          `studentId: ${studentId}, questionId: ${payload.studentId}`
        );
        throw new Error("questionid != studentid");
      }
      console.log(`question answered ${JSON.stringify(payload)}`);
      resultRef.current.innerText = "Video call opening...";
      handleMoveToCall(payload.teacherId, payload.studentId);
      navigate("/video");
    });
  });
  const handleMoveToCall = async (teacherId, studentId) => {
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
