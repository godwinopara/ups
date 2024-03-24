import { IoCheckmark } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Status() {
	return (
		<section className="max-w-5xl mx-auto px-6 my-14">
			<h2 className="font-bold text-xl mb-8">Shipping Status</h2>
			<div className="flex gap-x-5">
				<div className="relative">
					<div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
						<IoCheckmark />
					</div>
					<div className="h-full w-[3px] abosolute inset-0 bg-green-700 mx-auto"></div>
				</div>
				<div>
					<h1 className="font-medium">Shipped</h1>
					<span className="text-gray-600 block">Sorting and Processing at UFC facility</span>
					<span className="text-gray-600 block">Label Created on 13/03/2024</span>
					<span className="text-gray-600 block mb-3">
						Shipment Departed from facility 13/03/2024
					</span>
				</div>
			</div>
			<div className="flex gap-x-5 mb-5">
				<div className="relative mb-1">
					<div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
						<IoCheckmark />
					</div>
					<div className="h-full w-[3px] abosolute inset-0 bg-green-700 mx-auto"></div>
				</div>
				<div>
					<h1 className="font-medium">Shipped</h1>
					<span className="text-gray-600 block">Arrived Facility at 16/03/2024</span>
					<span className="text-gray-600 block">Shipment Departed at 18/03/2024</span>
				</div>
			</div>
			<div className="flex gap-x-5 mb-3">
				<div>
					<div className="border-2 text-lg border-green-700 rounded-[100%] h-6 w-6 text-green-700 font-medium flex items-center justify-center">
						<MdOutlineKeyboardArrowDown />
					</div>
					<div className="flex flex-col justify-center">
						<div className="text-center">|</div>
						<div className="text-center">|</div>
						<div className="text-center">|</div>
						<div className="text-center">|</div>
					</div>
				</div>
				<div>
					<h1>In Transit</h1>
					<span className="text-gray-600 block">Shipment Expected Arrival: 23/03/2024</span>
					<span className="text-gray-600">Shipment Expected Depature: 26/03/2024</span>
					<p className="text-gray-600">Awaiting arrival at Sydney</p>
				</div>
			</div>
			<div className="flex gap-x-5 mb-5">
				<div>
					<div className="bg-yellow-500 rounded-[100%] h-6 w-6 text-green-700 font-medium flex items-center justify-center"></div>
					<div className="flex flex-col justify-center">
						<div className="text-center">|</div>
						<div className="text-center">|</div>
						<div className="text-center">|</div>
					</div>
				</div>
				<div>
					<h1>Pending</h1>
					<span className="text-gray-600">Shipment Expected Arrival: 28/03/2024</span>
					<p className="text-gray-600">Awaiting arrival at Sydney</p>
				</div>
			</div>
		</section>
	);
}
