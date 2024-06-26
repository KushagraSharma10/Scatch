const express = require("express");
const app = express();
const path = require("path")
const cookieParser = require("cookie-parser")
const db = require("./config/mongoose-connection")
const ownerRouter = require("./controllers/ownersRouter")
const usersRouter = require("./controllers/usersRouter")
const productsRouter = require("./controllers/productsRouter")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")));

app.use("/owners", ownerRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)

app.listen(3000);
