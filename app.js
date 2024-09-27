const express = require("express");
const registrationRouter = require("./controllers/registration");
const connectToDb = require("./connectDb");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Registration API");
});

//middleware

app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
  })
);
app.use(express.json());

app.use("/api/v1/register", registrationRouter);

const startServer = async () => {
  try {
    await connectToDb(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
