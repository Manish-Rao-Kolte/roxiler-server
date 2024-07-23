import "dotenv/config";
import { app } from "./app.js";
import connectDb from "./config/mongoose.config.js";
const port = process.env.port || 4000;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port: ", port);
    });

    app.on("error", () => {
      console.log("Error while connecting to the server");
    });
  })
  .catch((err) => {
    console.log("Error while connecting to DB: ", err);
  });
