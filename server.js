const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();
const port = process.env.PORT || 5000;

const contactsRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api/contacts", contactsRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
