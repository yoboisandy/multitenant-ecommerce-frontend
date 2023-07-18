import HomePage from "../../components/LandingPage/HomePage";
import StoreLandingPage from "../../components/LandingPage/Store/LandingPage/StoreLandingPage";
import { currentDomain } from "../../config/urlConfig";
const Home = () => {
	const currentUrl = currentDomain;
	if (currentUrl.isTenant) {
		return <StoreLandingPage />;
	} else {
		return <HomePage />;
	}
};

export default Home;
