const getTutor = async () => {
    const token = localStorage.getItem("token");
    let userData = { userLoggedIn: false, userName: "" };
    if (!token) {
      return userData;
    }
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    userData = await fetch("http://localhost:5000/teacher/profile", requestOptions)
      .then((response) => {
        if (response.status === 401) {
          localStorage.removeItem('token')
          throw new Error("token expired");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        return { education: result.education, skills: result.skills };
      })
      .catch((error) => {
        console.log("error", error);
        return { userLoggedIn: false, userName: "" };
      });
  
    return userData;
  };
  
  module.exports = {
    getTutor,
  };