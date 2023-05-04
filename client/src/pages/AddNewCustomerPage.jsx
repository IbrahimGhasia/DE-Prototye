import { useState } from "react";
import { useAccount } from "wagmi";
import { Polybase } from "@polybase/client";
import { Navigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
// import { createCollection } from "../../lib/polybase";

export default function AddNewCustomerPage() {
	const { isConnected, address: walletAddress } = useAccount();

	const [custName, setCustName] = useState("");
	const [dob, setDob] = useState(new Date());
	const [gender, setGender] = useState("");
	const [address, setAddress] = useState("");
	const [contact, setContact] = useState("");
	const [email, setEmail] = useState("");
	const [holderName, setHolderName] = useState("");
	const [accNumber, setAccNumber] = useState("");
	const [branch, setBranch] = useState("");
	const [bank, setBank] = useState("");
	const [redirect, setRedirect] = useState(false);

	const unique_id = uuid();

	const db = new Polybase({ defaultNamespace: "customers" });
	const collectionReference = db.collection("Customer");

	function inputLabel(title) {
		return <label className="text-gray-500 font-semibold">{title}</label>;
	}

	async function handleSubmit(ev) {
		ev.preventDefault();
		if (!isConnected) {
			alert("Connect Your Wallet first!");
			return;
		}

		const recordData = await collectionReference.create([
			unique_id,
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
		]);
		console.log(recordData);
		setRedirect(true);
	}

	if (redirect) {
		return <Navigate to={"/view-customers"} />;
	}

	return (
		<div>
			<h1 className="text-5xl text-center my-10 text-blue-700">
				Add New Customer
			</h1>
			<form className="max-w-4xl my-5 mx-auto" onSubmit={handleSubmit}>
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
				<div>
					<button className="primary">Submit</button>
				</div>
			</form>
		</div>
	);
}
