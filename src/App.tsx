import { Toaster } from "react-hot-toast";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<AllRoutes />;
				<Toaster
					position="top-right"
					toastOptions={{
						style: {
							background:
								"linear-gradient(241.25deg, rgba(41, 39, 85, 0.35) 4.4%, rgba(41, 39, 84, 0.78) 61.77%, rgba(27, 24, 66, 0.35) 119.94%)",
							boxShadow:
								"0px 51px 69px rgba(23, 18, 43, 0.585739)",
							backdropFilter: "blur(11.5px)",
							color: "#fff",
						},
					}}
				/>
			</Provider>
		</>
	);
}

export default App;
