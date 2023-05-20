import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import { PrimaryButton } from "../../Shared/Buttons/Buttons";
const Navbar = () => {
	return (
		<div>
			<nav className="flex justify-between items-center p-2">
				<Link to={`/`}>
					<img src={logo} width={170} alt="Mecomm" />
				</Link>
				<div className="flex gap-12 items-center">
					<Link to="/login" className={`font-semibold`}>
						Login
					</Link>
					<Link to="/register">
						<PrimaryButton>Get Started</PrimaryButton>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
