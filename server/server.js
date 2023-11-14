require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const cors = require("cors");
const router = require("./routes/appRoutes");

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(
        `server is up and running at http://localhost:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log("error occurred", error);
  }
};
startServer();

app.use("/api/task", router);
