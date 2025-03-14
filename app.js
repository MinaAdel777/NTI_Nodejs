const port = 3000;
const express = require("express");
const connectDB = require("./config/db.config");
const userRouter = require("./Routers/user.router");
const userTypeRouter = require("./Routers/userType.router");
const productRouter = require("./Routers/product.router");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());
app.use("/images", express.static("./imgs"));
connectDB();

app.use("/users", userRouter);
app.use("/usertypes", userTypeRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello in my MVC Backend API - MINA ADEL");
});

app.listen(port, () => console.log(`server started at port ${port}`));
