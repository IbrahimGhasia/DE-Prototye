const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const fs = require("fs");

const User = require("./models/User");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:5173",
	})
); // to communicate frontend and backend running on two different ports

mongoose.connect(process.env.MONGO_URI);
console.log("Mongo DB Connected Successfully");

app.post("/register", async (req, res) => {
	const {
		custName,
		dob,
		gender,
		address,
		contact,
		email,
		holderName,
		accNumber,
		branch,
		bank,
		fingerprint,
	} = req.body;

	try {
		const UserDoc = await User.create({
			cust_name: custName,
			gender: gender,
			dob: dob,
			cust_address: address,
			phone: contact,
			email: email,
			fingerprint: [fingerprint],
			acc_holder_name: holderName,
			acc_Number: accNumber,
			acc_Branch: branch,
			acc_Bank: bank,
		});
		res.json(UserDoc);
	} catch (e) {
		res.status(422).json(e);
	}
});

const photosMiddleWare = multer({ dest: "uploads/" });
app.post("/upload", photosMiddleWare.array("photos", 100), async (req, res) => {
	const uploadedFiles = [];
	for (let i = 0; i < req.files.length; i++) {
		const { path, originalname } = req.files[i];
		const parts = originalname.split(".");
		const ext = parts[parts.length - 1];
		const newPath = path + "." + ext;
		fs.renameSync(path, newPath);
		uploadedFiles.push(path.replace("uploads/", ""));
	}
	res.json(uploadedFiles);
});

app.get("/customers", async (req, res) => {});

const port = 3000;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
