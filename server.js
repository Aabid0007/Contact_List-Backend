const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv =require("dotenv").config();
const path = require("path");
const cors = require("cors")

connectDb();
const app = express();

const allowedOrigins = ["https://contact-list-frontend.onrender.com"];

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));


const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(path.resolve(__dirname, 'uploads')));
app.use("/api/contacts", require("./routes/contactsRoutes"))



app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
