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

    socket.on("removeQuestion", async (payload) => {
      const studentId = payload.studentId;
      console.log(` ${studentId} question answered by someone else`);
      setQuestions([
        ...questions.filter((questionObj) => {
          if (questionObj.studentId === studentId) {
            return false;
          }
        }),
      ]);
    });

    socket.on("moveToCall", async (payload) => {
      const studentId = payload.studentId;
      const teacherId = payload.teacherId;
      console.log(`question answered ${studentId} ${teacherId}`);
      await handleMoveToCall(studentId, teacherId);
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
    <>
    <div className="App h-full w-full bg-slate-500 p-6">
      <div>
    {/* <h3 className="text-4xl text-black font-semibold m-4">Incoming Doubts</h3> */}
      <div className="App-header flex justify-center flex-row bg-white p-4">
        {questions.map((questionObj) => {
          return (
            <div className="flex flex-row bg-red-600">
            <div
              className="question flex p-10 flex-col border bg-slate-900 rounded-xl m-1"
              key={questionObj.studentId}
              studentId={questionObj.studentId}
            >
              <textarea
                className="p-4 rounded-xl"
                type="text"
                name="chat"
                placeholder="type question"
                value={questionObj.question}
                readOnly={true}
              />
              <div className="flex mt-2">
              <button className="bg-green-500 text-white p-2 m-2 w-24 rounded-full " onClick={(e) => handleAnswer(e, questionObj.studentId)}>
                Answer
              </button>
              <button className="bg-red-500 text-white p-2 m-2 ml-0 w-24 rounded-full" onClick={(e) => handleDecline(e, questionObj.studentId)}>
                Decline
              </button>
              </div>
            </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
    </>
  );
}

export default TeacherDoubt;
