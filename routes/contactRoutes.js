const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContactWithId,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContactWithId);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
