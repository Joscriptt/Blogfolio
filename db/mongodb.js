import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose;
  mongoose
    .set("strictQuery", true)
    // U CAN REPLACE URS WITH MONGO ATLAS TO MAKE WITH WORK ONLINE BUT AM USING THE COMPASS ON MY LOCAL MACHINE
    .connect(process.env.MONGO_URL, {
      // .connect("mongodb://127.0.0.1:27017/quil", {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => console.log(error));
};

export default connectDB;
