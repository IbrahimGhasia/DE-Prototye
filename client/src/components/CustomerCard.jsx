import {
	IconBuilding,
	IconMail,
	IconPhone,
	IconWallet,
} from "@tabler/icons-react";

/* eslint-disable react/prop-types */
export default function CustomerCard({ props }) {
	// let walletAddress_start = props.id.slice(0, 7);
	// let walletAddress_end = props.id.slice(-5);
	// console.log(walletAddress_end);
	return (
		<div className="">
			<div className="my-5 mx-5 border-2 gap-5 border-gray-200 rounded-2xl p-8 hover:shadow-lg duration-300">
				<h1 className="text-3xl text-blue-500 text-center">
					{props.cust_name}
				</h1>
				<div className="flex gap-2 justify-center items-center">
					<span className="flex gap-1 items-center">
						<IconMail className="text-gray-500" />
						<p className="text-lg text-gray-500">{props.email}</p>
					</span>
					<span className="flex gap-1 items-center">
						<IconPhone className="text-gray-500" />
						<p className="text-lg text-gray-500">{props.phone}</p>
					</span>
				</div>
				<div className="border-b">
					<span className="flex gap-1 items-center justify-center">
						<IconWallet className="text-gray-500" />
						{/* <p className="text-lg text-gray-500">
							{walletAddress_start}....{walletAddress_end}
						</p> */}
					</span>
				</div>
				<div className="mt-3">
					<span className="flex gap-1 items-center">
						<p className="text-lg text-gray-500">
							Customer Address: {props.cust_address}
						</p>
					</span>

					<span className="flex gap-1 justify-center items-center mt-3 border-b">
						<IconBuilding className="text-blue-500" />
						<h3 className="text-2xl text-blue-500">Bank Details</h3>
					</span>

					<p className="text-lg text-gray-500">
						Holder&apos;s name: {props.acc_holder_name} <br />
						Account number: {props.acc_Number} <br />
						Bank name: {props.acc_Bank} <br />
						Branch name: {props.acc_Branch} <br />
					</p>
				</div>
			</div>
		</div>
	);
}
