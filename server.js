const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv =require("dotenv").config();
const path = require("path");
const cros = require("cors")

connectDb();
const app = express();
app.use(cros());
const port = process.env.PORT ||3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.resolve(__dirname, 'uploads')));

app.use("/api/contacts", require("./routes/contactsRoutes"))

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
