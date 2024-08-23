export default function ShippingDetails() {
	return (
		<div className="max-w-5xl mx-auto my-10 px-6">
			<h2 className="font-bold text-xl mb-8">Shipping Details</h2>

			<div className="overflow-x-auto">
				<table className="w-full text-left hidden lg:block">
					<tr className="bg-yellow-600 text-white mb-5">
						<th className="pl-5 py-5 w-32">S/N</th>
						<th className="py-5 w-60">Package Number</th>
						<th className="py-5 w-60">Shipment Depature Date</th>
						<th className="py-5 w-60">Shipment Arrival Date</th>
					</tr>
					<tr>
						<th className="pl-5 py-5 w-32">1</th>
						<td className="py-5 w-60">987654123</td>
						<td className="w-60 ml-5">June 12 2024</td>
						<td className="w-60 ml-5">June 20 2024</td>
					</tr>
				</table>
				<div className="lg:hidden">
					<div className="mb-3">
						<h3 className="font-bold mb-3">Package Number</h3>
						<p>987654123</p>
					</div>
					<div className="mb-3">
						<h3 className="font-bold mb-3">Shipment Depature Date</h3>
						<p>June 12 2024</p>
					</div>

					<div>
						<h3 className="font-bold mb-3">Shipment Arrival Date</h3>
						<p>June 20 2024</p>
					</div>
				</div>
			</div>
		</div>
	);
}
