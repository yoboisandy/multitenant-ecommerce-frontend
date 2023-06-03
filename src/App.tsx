import { Toaster } from "react-hot-toast";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<AllRoutes />
				<Toaster position="top-right" />
			</Provider>
		</>
	);
}

export default App;
