import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import { PrimaryButton } from "../../Shared/Buttons/Buttons";
const Navbar = () => {
	return (
		<nav>
			<div className="flex justify-between md:flex-row flex-col items-center p-2">
				<Link to={`/`}>
					<img src={logo} width={170} alt="Mecomm" />
				</Link>
				<div className="flex md:gap-12 gap-2 items-center md:flex-row flex-col">
					<Link to="/login" className={`font-semibold`}>
						Login
					</Link>
					<Link to="/register">
						<PrimaryButton>Get Started</PrimaryButton>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
