import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" }); // or './env' if that’s your actual filename

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Hello World!"));

const startServer = async () => {
  try {
    const connectionInstance = await connectDB();
    console.log(`Database connected to host: ${connectionInstance.connection.host}`);

    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  } catch (err) {
    console.error("MONGO db connection failed !!!", err);
    process.exit(1);
  }
};

startServer();




/* ( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/
            ${DB_NAME}`)
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
}) ()
    */