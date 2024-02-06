import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import mainRoute from "./routes/mainRoute.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());
app.use(mainRoute);

mongoose
  .connect(
    "mongodb+srv://icbr19fl:icbr19fl@cluster0.jio3en9.mongodb.net/Addis_Music?retryWrites=true&w=majority"
  )
  .then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Could not connect \n", err);
  });
