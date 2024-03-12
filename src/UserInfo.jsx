export default function UserInfo() {
	return (
		<section className="px-6 max-w-5xl mx-auto py-5">
			<div className="lg:flex lg:justify-between gap-x-20">
				<div className="w-full mb-8 lg:mb-0">
					<h2 className="font-bold text-xl mb-3">Sender's Information</h2>
					<div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Name</h2>
							<p>Major General David S. Baldwin</p>
						</div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Address</h2>
							<p> 3455 Senn Rd. San Diego, CA, United States </p>
						</div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Email</h2>
							<p>davidbaldwin22@gmail.com</p>
						</div>
						<div className="xl:flex xl:justify-between items-center gap-x-10">
							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Country</h2>
								<p>United States</p>
							</div>
							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Phone Number</h2>
								<p>+13104211377</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<h2 className="font-bold text-xl mb-3">Receiver Information</h2>
					<div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Receiver's Name</h2>
							<p>Marcia Elaine Russell</p>
						</div>
						<div className="mb-3">
							<h2 className="mb-1 font-semibold">Receiver's Address</h2>
							<p>Unit 32, 11 Tripcony Place Wakerley Queensland</p>
						</div>
						<div className="lg:flex lg:justify-between items-center">
							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Country</h2>
								<p>Australia</p>
							</div>

							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Phone Number</h2>
								<p>+61402073377</p>
							</div>
						</div>
						<div className="lg:flex lg:justify-between items-center">
							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Email </h2>
								<p>Merussell54@gmail.com</p>
							</div>
							<div className="mb-3">
								<h2 className="mb-1 font-semibold">Postal Code </h2>
								<p>4154</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
