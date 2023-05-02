import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains([polygon], [publicProvider()]);

const { connectors } = getDefaultWallets({
	appName: "My RainbowKit App",
	projectId: "YOUR_PROJECT_ID",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<WagmiConfig client={wagmiClient}>
				<RainbowKitProvider chains={chains}>
					<App />
				</RainbowKitProvider>
			</WagmiConfig>
		</BrowserRouter>
	</React.StrictMode>
);
