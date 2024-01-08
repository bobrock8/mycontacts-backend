// Use async handler instead of adding try/catch block to the each of the methods
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create a new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("req body", req.body);

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  res.status(201).json({ message: "Create contact" });
});

//@desc Get a contact
//@route GET /api/contacts/:id
//@access public
const getContactWithId = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact with ${req.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact with ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact with ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContactWithId,
  updateContact,
  deleteContact,
};
