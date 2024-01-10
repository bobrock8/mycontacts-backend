const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

const contactsRoutes = require("./routes/contactRoutes");
const usersRoutes = require("./routes/usersRoutes");
const errorHandler = require("./middleware/errorHandler");

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactsRoutes);
app.use("/api/users", usersRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
