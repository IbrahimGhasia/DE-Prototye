export default function IndexPage() {
	return (
		<div className="">
			<div className="bg-dotted-spacing-12 hover:bg-dotted-spacing-1 duration-1000 bg-dotted-sky-300 py-32">
				<h1 className="text-6xl text-blue-700 underline underline-offset-8 font-semibold text-center">
					Welcome to BioTrust
				</h1>
				<ul className="font-light text-2xl mt-10 text-gray-900 px-48 text-justify list-disc">
					<li>
						Biometric payment systems that use fingerprints for
						secure transactions have become increasingly popular in
						recent years.
					</li>
					<li>
						It uses fingerprints for authentication and provides
						advanced security for fast, convenient transactions.
					</li>
					<li>
						Blockchain technology can further enhance the security
						of a biometric fingerprint payment system by securely
						storing and sharing data across a network in an
						immutable and transparent way.
					</li>
					<li>
						Blockchain technology enhances security for biometric
						data by offering a tamper-resistant and secure ledger
						system. This provides an extra layer of protection
						against breaches as hackers cannot alter data stored on
						the blockchain, ensuring secure and seamless payments.
					</li>
				</ul>
			</div>
		</div>
	);
}
