import { AppLayout } from "@/components";
import { store } from "@/state/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</Provider>
	);
}
