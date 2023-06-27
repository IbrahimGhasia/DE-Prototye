import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IconFingerprint } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="flex items-center p-8 justify-between border-b-2 border-blue-700">
			<div>
				<Link to={"/"}>
					<h1 className="text-5xl font-semibold text-blue-700 cursor-pointer">
						<span className="flex items-center gap-2">
							<IconFingerprint size={48} />
							BioTrust
						</span>
					</h1>
				</Link>
			</div>
			<div className="">
				<ul className="flex gap-10 items-center text-md text-gray-500 ">
					<Link to={"/"}>
						<li className="cursor-pointer hover:text-blue-700">
							HOME
						</li>
					</Link>
					<Link to={"/new-customer"}>
						<li className="cursor-pointer hover:text-blue-700">
							ADD NEW CUSTOMERS
						</li>
					</Link>
					<Link to={"/view-customers"}>
						<li className="cursor-pointer hover:text-blue-700">
							VIEW CUSTOMERS
						</li>
					</Link>
				</ul>
			</div>
			<div>
				<ConnectButton
					accountStatus="full"
					chainStatus="none"
					showBalance={false}
				/>
			</div>
		</div>
	);
}
