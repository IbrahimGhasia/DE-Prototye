/* eslint-disable react/jsx-key */
import { useState } from "react";
// import { Polybase } from "@polybase/client";
import CustomerCard from "../components/CustomerCard";

export default function CustomerPage() {
	const [cust, setCust] = useState([]);

	// const db = new Polybase({ defaultNamespace: "customers" });
	// const collectionReference = db.collection("Customer");

	// if (!isConnected) {
	// 	alert("Connect Your Wallet First!");
	// 	return;
	// }

	// async function getCustomers() {
	// 	if (!address) return null;
	// 	try {
	// 		const { data } = await collectionReference.get();
	// 		setCust(data);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }

	// // eslint-disable-next-line react-hooks/rules-of-hooks
	// useEffect(() => {
	// 	getCustomers();
	// }, []);

	return (
		<div className="grid md:grid-cols-3 gap-5 mx-10">
			{cust.length > 0 &&
				cust.map((cust) => (
					<div>
						<CustomerCard key={cust.data.id} props={cust.data} />
					</div>
				))}
		</div>
	);
}
