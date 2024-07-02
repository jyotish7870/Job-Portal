import mongoose from "mongoose";

export const dbConnection = () => {
  console.log(process.env.MONGO_URL);
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
