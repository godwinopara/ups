export default function UserInfo() {
	return (
		<section className="px-6 max-w-5xl mx-auto py-5">
			<div className="lg:flex lg:justify-between gap-x-20">
				<div className="w-full mb-8 lg:mb-0">
					<h2 className="font-bold text-xl mb-3">Sender's Information</h2>
					<div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Name</h2>
							<p>Mr Samuel Heavner</p>
						</div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Address</h2>
							<p> 24  Westgate Road, Leeds LS2 7LY</p>
						</div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Email</h2>
							<p>samuelheavner11@gmail.com</p>
						</div>
						<div className="xl:flex xl:justify-between items-center gap-x-10">
							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Country</h2>
								<p>United Kingdom</p>
							</div>
							<div className="mb-3">
								{/* <h2 className="mb-1 font-semibold">Phone Number</h2>
								<p>+13104211377</p> */}
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<h2 className="font-bold text-xl mb-3">Receiver Information</h2>
					<div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Receiver's Name</h2>
							<p>Louise Harris</p>
						</div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Receiver's Address</h2>
							<p>12 Second Street Millfield North South Wales 2325</p>
						</div>
						<div className="lg:flex lg:justify-between items-center">
							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Country</h2>
								<p>Australia</p>
							</div>

							<div className="mb-3">
								{/* <h2 className="mb-1 font-semibold">Phone Number</h2>
								<p>+61402073377</p> */}
							</div>
						</div>
						<div className="lg:flex lg:justify-between items-center">
							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Email </h2>
								<p>lmccaig004@gmail.com</p>
							</div>
							<div className="mb-3">
								{/* <h2 className="mb-1 font-semibold">Postal Code </h2>
								<p>4154</p> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
