const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContactWithId,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContact);

router
  .route("/:id")
  .get(getContactWithId)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
