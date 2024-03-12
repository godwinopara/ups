import ShippingDetails from "./ShippingDetails";
import Status from "./Status";
import UserInfo from "./UserInfo";
import logo from "./images/UPS_logo.svg";
import bar from "./images/bar.png";

function App() {
	return (
		<>
			<div className="flex flex-col justify-center items-center my-10">
				<img src={logo} alt="" className="mb-6" />
				<div className="flex">
					<img src={bar} alt="" />
					<img src={bar} alt="" />
				</div>
				<strong>#FF4SCR99273</strong>
			</div>
			<div className="text-red-700 text-center px-8">
				This Link is Confidential and for security purpose the link will expire in 30mins
			</div>
			<section>
				<UserInfo />

				<section>
					<div className="bg-yellow-600 text-white py-6 lg:py-10">
						<h2 className="text-center text-xl lg:text-2xl">SHIPMENT STATUS</h2>
					</div>
				</section>

				<ShippingDetails />
				<Status />
			</section>
		</>
	);
}

export default App;
