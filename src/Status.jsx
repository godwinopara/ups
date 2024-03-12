export default function Status() {
	return (
		<section className="max-w-5xl mx-auto px-6 my-14">
			<h2 className="font-bold text-xl mb-8">Shipping Status</h2>
			<div className="flex items-center gap-x-5 mb-5">
				<div>
					<div className="bg-green-700 rounded-[100%] h-4 w-4"></div>
					<div className="flex flex-col justify-center">
						<div className="text-center">|</div>
						<div className="text-center">|</div>
						<div className="text-center">|</div>
					</div>
				</div>
				<div>
					<h1>Processing</h1>
					<span className="text-gray-600 block">Sorting and Processing at UFC facility</span>
					<span className="text-gray-600 block">Shipment Expected Depature: 13/03/2024</span>
					<span className="text-gray-600">
						Your shipment will depart UFC facility on 13/03/2024
					</span>
				</div>
			</div>
			<div className="flex items-center gap-x-5 mb-5">
				<div>
					<div className="bg-yellow-500 rounded-[100%] h-4 w-4"></div>
					<div className="flex flex-col justify-center">
						<div className="text-center">|</div>
						<div className="text-center">|</div>
						<div className="text-center">|</div>
					</div>
				</div>
				<div>
					<h1>Pending</h1>
					<span className="text-gray-600 block">Shipment Expected Arrival: 16/03/2024</span>
					<span className="text-gray-600 block">Shipment Expected Depature: 18/03/2024</span>
					<p className="text-gray-600">Awaiting arrival at UFC facility New York</p>
				</div>
			</div>
			<div className="flex items-center gap-x-5 mb-5">
				<div>
					<div className="bg-yellow-500 rounded-[100%] h-4 w-4"></div>
					<div className="flex flex-col justify-center">
						<div className="text-center">|</div>
						<div className="text-center">|</div>
						<div className="text-center">|</div>
					</div>
				</div>
				<div>
					<h1>Pending</h1>
					<span className="text-gray-600 block">Shipment Expected Arrival: 23/03/2024</span>
					<span className="text-gray-600">Shipment Expected Depature: 26/03/2024</span>
					<p className="text-gray-600">Awaiting arrival at Sydney</p>
				</div>
			</div>
			<div className="flex items-center gap-x-5 mb-5">
				<div>
					<div className="bg-yellow-500 rounded-[100%] h-4 w-4"></div>
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
