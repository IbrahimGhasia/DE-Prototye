import { useState } from "react";
// import { useAccount } from "wagmi";
// import { Polybase } from "@polybase/client";
// import { v4 as uuid } from "uuid";
// import uploadFinger from "../../lib/web3storage";
import axios from "axios";

// import { createCollection } from "../../lib/polybase";
export default function AddNewCustomerPage() {
	// const { isConnected } = useAccount();

	const [custName, setCustName] = useState("");
	const [dob, setDob] = useState(new Date());
	const [gender, setGender] = useState("");
	const [address, setAddress] = useState("");
	const [contact, setContact] = useState("");
	const [email, setEmail] = useState("");
	const [fingerprint, setFingerPrint] = useState([]);
	const [holderName, setHolderName] = useState("");
	const [accNumber, setAccNumber] = useState("");
	const [branch, setBranch] = useState("");
	const [bank, setBank] = useState("");

	// const unique_id = uuid();

	// const db = new Polybase({ defaultNamespace: "customers" });
	// const collectionReference = db.collection("Customer");

	function inputLabel(title) {
		return <label className="text-gray-500 font-semibold">{title}</label>;
	}

	async function handleUpload(ev) {
		ev.preventDefault();
		const fingerData = [];
		fingerData.push(ev.target.files[0].name);
		setFingerPrint(fingerData);
		setFingerPrint(ev.target.files[0].name);
		const data = new FormData();
		const files = ev.target.files;
		for (let i = 0; i < files.length; i++) {
			data.append("photos", files[i]);
		}
		axios.post("/upload", data, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		// await uploadFinger()
	}

	async function handleSubmit(ev) {
		ev.preventDefault();
		// if (!isConnected) {
		// 	alert("Connect Your Wallet first!");
		// 	return;
		// }

		// const recordData = await collectionReference.create([
		// 	unique_id,
		// 	custName,
		// 	dob,
		// 	gender,
		// 	address,
		// 	contact,
		// 	email,
		// 	holderName,
		// 	accNumber,
		// 	branch,
		// 	bank,
		// ]);
		// console.log(recordData);

		try {
			await axios.post("/register", {
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
			});
			alert("Data Uploaded Successfully");
		} catch (e) {
			console.log(e);
			alert("Something went wrong");
		}
	}

	return (
		<div>
			<h1 className="text-5xl text-center my-10 text-blue-700">
				Add New Customer
			</h1>
			<form className="max-w-4xl my-5 mx-auto">
				<h4 className="-ml-10 text-blue-500 mb-5 text-xl border-b-2 border-blue-500">
					Customer Personal Details
				</h4>
				<div className="grid md:grid-cols-3 gap-4">
					<span>
						{inputLabel("Customer Name")}
						<input
							type="text"
							placeholder="Customer Name"
							value={custName}
							onChange={(ev) => setCustName(ev.target.value)}
							required
						/>
					</span>
					<span>
						{inputLabel("Gender")}
						<select
							onChange={(ev) => {
								setGender(ev.target.value);
							}}
							value={gender}
						>
							<option>Male</option>
							<option>Female</option>
							<option>Non-Binary</option>
							<option>Prefer not to disclose</option>
						</select>
					</span>
					<span>
						{inputLabel("Date of Birth")}
						<input
							type="date"
							placeholder="Date of Birth"
							value={dob}
							onChange={(ev) => setDob(ev.target.value)}
							required
						/>
					</span>
				</div>
				<div>
					{inputLabel("Home Address")}
					<textarea
						rows={3}
						placeholder="Customer Permenant Address"
						value={address}
						onChange={(ev) => setAddress(ev.target.value)}
						required
					/>
				</div>
				<div className="grid md:grid-cols-2 gap-4">
					<span>
						{inputLabel("Phone No.")}
						<input
							type="tel"
							placeholder="Contact Number"
							value={contact}
							onChange={(ev) => setContact(ev.target.value)}
							required
						/>
					</span>
					<span>
						{inputLabel("Email ID")}
						<input
							type="email"
							placeholder="Email Address"
							value={email}
							onChange={(ev) => setEmail(ev.target.value)}
							required
						/>
					</span>
				</div>
				<h4 className="-ml-10 mt-10 text-blue-500 mb-5 text-xl border-b-2 border-blue-500">
					Customer Bank Details
				</h4>

				<div className="grid md:grid-cols-3 gap-4">
					<span>
						{inputLabel("Account Holder Name")}
						<input
							type="text"
							placeholder="Account Holder Name"
							value={holderName}
							onChange={(ev) => setHolderName(ev.target.value)}
							required
						/>
					</span>
					<span>
						{inputLabel("Account Number")}
						<input
							type="text"
							placeholder="Account Number"
							value={accNumber}
							onChange={(ev) => setAccNumber(ev.target.value)}
							required
						/>
					</span>
					<span>
						{inputLabel("Branch")}
						<input
							type="text"
							placeholder="Branch of the Bank"
							value={branch}
							onChange={(ev) => setBranch(ev.target.value)}
							required
						/>
					</span>
				</div>
				<div>
					{inputLabel("Bank")}
					<input
						type="text"
						placeholder="Name of the Bank"
						value={bank}
						onChange={(ev) => setBank(ev.target.value)}
						required
					/>
				</div>
				<div className="relative text-center mt-3">
					<input
						type="file"
						className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
						onChange={handleUpload}
					/>
					<div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
						<svg
							className="w-6 h-6 mx-auto mb-2 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							></path>
						</svg>
						<span className="text-sm text-gray-600">
							Select Fingerprint
						</span>
					</div>
				</div>
				<div>
					<button className="primary" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
