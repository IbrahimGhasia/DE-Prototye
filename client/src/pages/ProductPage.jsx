import { useState } from "react";

export default function ProductPage() {
	const [product, setProduct] = useState("");
	const [qty, setQty] = useState();
	const [addedProduct, setAddedProduct] = useState([]);

	function inputLabel(title) {
		return <label className="text-gray-500 font-semibold">{title}</label>;
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function handleSubmit(ev) {
		ev.preventDefault();
		const newProduct = {
			name: product,
			quantity: qty,
			price: getRandomInt(50, 200),
		};
		setAddedProduct((prev) => [...prev, newProduct]);
	}

	console.log(addedProduct);

	return (
		<div>
			<h1 className="text-center text-5xl text-blue-700">
				List of Product you have selected
			</h1>
			<form className="px-56 mt-12">
				<div className="grid grid-cols-8 gap-5">
					<div className="col-span-7">
						{inputLabel("Select the product")}
						<select
							onChange={(ev) => {
								setProduct(ev.target.value);
							}}
						>
							<option value="Kitkat">Kitkat</option>
							<option value="ParleG">ParleG</option>
							<option value="SunSilk">SunSilk</option>
							<option value="Nutella">Nutella</option>
							<option value="Oreo">Oreo</option>
							<option value="Dairy Milk">Dairy Milk</option>
							<option value="Go Cheese">Go Cheese</option>
						</select>
					</div>

					<div>
						{inputLabel("Quantity")}
						<input
							type="number"
							min={1}
							onChange={(ev) => {
								setQty(ev.target.value);
							}}
						/>
					</div>
				</div>

				<div>
					<button className="primary" onClick={handleSubmit}>
						Add to Cart
					</button>
				</div>

				<div>
					{addedProduct.length > 0 && (
						<ul>
							{addedProduct.map((product, index) => (
								<li key={index} className="text-xl mt-5">
									<div className="flex justify-between items-baseline">
										<div>
											<span className="text-sm mr-5">
												{index}.
											</span>
											<span>{product.name}</span>
										</div>
										<div>
											<span className="text-gray-500 text-sm">
												Qty. {product.quantity}
											</span>
											<span className="text-gray-500 text-sm ml-5">
												Rs.{product.price}
											</span>
											<span className="text-gray-500 text-sm ml-5">
												Total Rs.
												{product.price *
													product.quantity}
											</span>
										</div>
									</div>
								</li>
							))}

							<div className="mt-10">
								<hr />
								<div className="flex justify-between mt-4">
									<p className="text-2xl ml-9">Total</p>
									<p>Rs. {getRandomInt(130, 2000)}</p>
								</div>
								<button className="primary">
									Proceed to CheckOut
								</button>
							</div>
						</ul>
					)}
				</div>
			</form>
		</div>
	);
}
