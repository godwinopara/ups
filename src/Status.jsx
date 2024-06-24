import { IoCheckmark } from "react-icons/io5";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FcInTransit } from "react-icons/fc";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

export default function Status() {
  return (
    <section className="max-w-5xl mx-auto px-6 my-14">
      <h2 className="font-bold text-xl mb-8">Shipping Status</h2>

      {/* <div className="flex gap-x-5 mb-5">
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
			</div> */}
      {/* <div className="flex gap-x-5 mb-5">
				<div className="relative mb-1">
					<div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
						<IoCheckmark />
					</div>
					<div className="h-full w-[3px] abosolute inset-0 bg-green-700 mx-auto"></div>
				</div>
				<div>
					<h1 className="font-medium">Arrived</h1>
					<span className="text-gray-600 block">Arrived Sydney at 23/03/2024</span>
					<span className="text-gray-600 block">
						Package received for processing by UPS Mail Innovations
					</span>
					<span className="text-gray-600 block">Package processed by UPS Mail Innovations</span>
					<span className="text-gray-600 block">Awaiting Approval for Delivery to Brisbane</span>
				</div>
			</div> */}
      {/* <div className="flex gap-x-5 mb-5">
				<div className="relative">
					<div className="bg-yellow-500 rounded-[100%] h-6 w-6 text-green-700 font-medium flex items-center justify-center"></div>
					<div className="h-full w-[3px] abosolute inset-0 bg-green-700 mx-auto"></div>
				</div>
				<div>
					<h1>Pending</h1>
					<p className="text-gray-600">Awaiting arrival at Brisbane</p>
				</div>
			</div> */}
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-yellow-400 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <FcInTransit />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-yellow-500">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">InTransit</h1>
          <span className="text-gray-900 block font-medium">Departed</span>
          <span className="text-gray-600 block">June 22, 2024, 10:30pm</span>
          <span className="text-gray-600 block">Jakarta, Indonesia</span>
        </div>
      </div>
      {/* <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Departed</h1>
          <span className="text-gray-600 block">June 22, 2024, 10:30pm</span>
          <span className="text-gray-600 block">Jakarta, Indonesia</span>
        </div>
      </div> */}
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Custom Clearance Complete</h1>
          <span className="text-gray-900 block font-medium">Inbound Custom Clearance</span>
          <span className="text-gray-600 block">June 22, 2024, 5pm</span>
          <span className="text-gray-600 block">Jakarta, Indonesia</span>
        </div>
      </div>
      {/* <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Custom Clearance Complete</h1>
          <span className="text-gray-900 block font-medium">Inbound Custom Clearance</span>
          <span className="text-gray-600 block">June 21, 2024, 5pm</span>
          <span className="text-gray-600 block">Jakarta, Indonesia</span>
        </div>
      </div> */}
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Arrived</h1>
          <span className="text-gray-600 block">June 20, 2024, 12:45pm</span>
          <span className="text-gray-600 block">Jakarta, Indonesia</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Departed</h1>
          <span className="text-gray-600 block">June 18, 2024, 10:30pm</span>
          <span className="text-gray-600 block">Kuala Lumpur, Malaysia</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Custom Clearance Complete</h1>
          <span className="text-gray-900 block font-medium">Inbound Custom Clearance</span>
          <span className="text-gray-600 block">June 18, 2024, 5pm</span>
          <span className="text-gray-600 block">Kuala Lumpur, Malaysia</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Arrived</h1>
          <span className="text-gray-600 block">June 17, 2024, 11:45am</span>
          <span className="text-gray-600 block">Kuala Lumpur, Malaysia</span>
        </div>
      </div>

      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Departed</h1>
          <span className="text-gray-600 block">June 15, 2024, 9:45pm</span>
          <span className="text-gray-600 block">Hanoi, Vietnam</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Custom Clearance Complete</h1>
          <span className="text-gray-900 block font-medium">Inbound Custom Clearance</span>
          <span className="text-gray-600 block">June 15, 2024, 5pm</span>
          <span className="text-gray-600 block">Hanoi, Vietnam</span>
        </div>
      </div>

      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Arrived</h1>
          <span className="text-gray-600 block">June 14, 2024, 2:45am</span>
          <span className="text-gray-600 block">Hanoi, Vietnam</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Departed</h1>
          <span className="text-gray-600 block">June 13, 2024, 9:45pm</span>
          <span className="text-gray-600 block">Beijing, China</span>
        </div>
      </div>

      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Custom Clearance Complete</h1>
          <span className="text-gray-900 block font-medium">Inbound Custom Clearance</span>
          <span className="text-gray-600 block">June 13, 2024, 9pm</span>
          <span className="text-gray-600 block">Beijing, China</span>
        </div>
      </div>

      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Arrived</h1>
          <span className="text-gray-600 block">June 13, 2024, 7:40pm</span>
          <span className="text-gray-600 block">Beijing, China</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Departed</h1>
          <span className="text-gray-600 block">June 12, 2024, 8pm</span>
          <span className="text-gray-600 block">Leeds, United Kingdom</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Custom Clearance Complete</h1>
          <span className="text-gray-900 block font-medium">Inbound Custom Clearance</span>
          <span className="text-gray-600 block">June 12, 2024, 6pm</span>
          <span className="text-gray-600 block">Leeds United Kingdom</span>
        </div>
      </div>
      {/* <div className="flex gap-x-5 mb-3">
				<div className="relative mb-1">
					<div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
						<IoCheckmark />
					</div>
					<div className="flex flex-col items-center justify-center mt-2 text-green-800">
					<IoEllipsisVerticalOutline />
					<IoEllipsisVerticalOutline />
					<IoEllipsisVerticalOutline />
					</div>
				</div>
				<div>
					<h1 className="font-bold">Inbound Custom Clearance</h1>
					<span className="text-gray-600 block">June 12, 2024, 4pm</span>
					<span className="text-gray-600 block">Leeds United Kingdom</span>
				</div>
			</div> */}
      {/* <div className="flex gap-x-5 mb-3">
				<div className="relative mb-1">
					<div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
						<IoCheckmark />
					</div>
					<div className="flex flex-col items-center justify-center mt-2 text-green-800">
					<IoEllipsisVerticalOutline />
					<IoEllipsisVerticalOutline />
					<IoEllipsisVerticalOutline />
					</div>
				</div>
				<div>
					<h1 className="font-bold">Label Created</h1>
					<span className="text-gray-600 block">June 12, 2024, 2:45am</span>
					<span className="text-gray-600 block">Leeds United Kingdom</span>
				</div>
			</div> */}

      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Sorting and Processed Through USPS Facility</h1>
          <span className="text-gray-900 block font-medium">Label Created</span>
          <span className="text-gray-600 block">June 12, 2024, 2pm</span>
          <span className="text-gray-600 block">Leeds United Kingdom</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Arrived at USPS Regional Origin Facility</h1>
          <span className="text-gray-600 block">June 12, 2024, 11am</span>
          <span className="text-gray-600 block">Leeds United Kingdom</span>
        </div>
      </div>
    </section>
  );
}
