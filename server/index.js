const express=require('express');
const cors=require('cors');
const errorMiddleware = require("./middleware/errorMiddleware");
const connection = require("./database/db");
require("dotenv").config();
const teacherRoute=require("./routes/teacherRoute");
const userRoute = require("./routes/userRoutes");
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');

const port=3001;

const app=express();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded());


app.get("/", (req, res) => {
    res.send("hello!!!!");
});

app.use("/teacher", teacherRoute);
app.use("/user", userRoute);



app.use(errorMiddleware);


connection();

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});