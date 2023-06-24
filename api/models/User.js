const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserScheme = Schema({
	cust_name: String,
	gender: String,
	dob: String,
	cust_address: String,
	phone: String,
	email: { type: String, unique: true },
	fingerprint: [String],
	acc_holder_name: String,
	acc_Number: String,
	acc_Branch: String,
	acc_Bank: String,
});

const UserModel = mongoose.model("User", UserScheme);
module.exports = UserModel;
