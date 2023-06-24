import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import AddNewCustomerPage from "./pages/AddNewCustomerPage";
import CustomerPage from "./pages/CustomerPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<IndexPage />} />
					<Route
						path="/new-customer"
						element={<AddNewCustomerPage />}
					/>
					<Route path="/view-customers" element={<CustomerPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
