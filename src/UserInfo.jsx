// import { IoCheckmark } from "react-icons/io5";

export default function UserInfo() {
  return (
    <section className="px-6 max-w-5xl mx-auto py-5">
      <div className="lg:flex lg:justify-between gap-x-20">
        <div className="w-full mb-8 lg:mb-0">
          <h2 className="font-bold text-xl mb-3">Sender's Information</h2>
          <div>
            <div className="mb-3">
              <h2 className="mb-1 font-semibold">Name</h2>
              <p>Col. Stephen S. Trotter</p>
            </div>
            <div className="mb-3">
              <h2 className="mb-1 font-semibold">Address</h2>
              <p> 238 California Ave. Fort Hunter Liggett, CA 93928</p>
            </div>
            {/* <div className="mb-3">
              <h2 className="mb-1 font-semibold">Email</h2>
              <p>samuelheavner11@gmail.com</p>
            </div> */}
            <div className="xl:flex xl:justify-between items-center gap-x-10">
              <div className="mb-3">
                <h2 className="mb-1 font-semibold">Country</h2>
                <p>United States Of America</p>
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
              <p>Leeanne Lovell</p>
            </div>
            <div className="mb-3">
              <h2 className="mb-1 font-semibold">Receiver's Address</h2>
              <p>8 Vancouver Street, Midwaypoint Tasmania 7171</p>
            </div>
            <div className="lg:flex lg:justify-between items-center">
              <div className="mb-3">
                <h2 className="mb-1 font-semibold">Country</h2>
                <p>Australia</p>
              </div>

              <div className="mb-3">
                <h2 className="mb-1 font-semibold">Phone Number</h2>
                <p>+61 439 949 127</p>
              </div>
            </div>
            <div className="lg:flex lg:justify-between items-center">
              <div className="mb-3">
                <h2 className="mb-1 font-semibold">Email </h2>
                <p>None</p>
              </div>
              <div className="mb-3">
                <h2 className="mb-1 font-semibold">Postal Code </h2>
                <p>7171</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 grid lg:grid-cols-2 bg-gray-200 px-6 py-10 lg:p-10 border-l-4 border-yellow-500">
        <div>
          <div className="mb-5">
            <h4 className="font-semibold">Log Number:</h4>
            <h3 className="font-bold text-lg lg:text-4xl">
              4204575092124903627191046
            </h3>
          </div>
          <div className="mb-8">
            <h2 className="font-semibold text-2xl mb-3">
              Expected Delivery by
            </h2>
            <div className="flex items-center gap-x-10">
              <div className="border-r border-gray-400 pr-6">
                <h3 className="font-bold">SATURDAY</h3>
                <div className="flex gap-x-3">
                  <span className="block font-bold text-5xl">30</span>
                  <div className="text-sm">
                    <p className="font-semibold">November</p>
                    <p className="font-semibold">2024</p>
                  </div>
                </div>
              </div>
              <div>
                <p>by</p>
                <strong>9.00pm</strong>
              </div>
            </div>
          </div>
          <p className="font-medium">
            Your Item arrived at our HANSON DISTRIBUTION CENTER origin facility
            on November 22 2024 at 7:38pm. The item is currently in transit to
            the destination
          </p>
        </div>
      </div>
    </section>
  );
}
