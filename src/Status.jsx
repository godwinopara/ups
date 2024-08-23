import { FcInTransit } from "react-icons/fc";
import { IoCheckmark } from "react-icons/io5";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { FcInTransit } from "react-icons/fc";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

export default function Status() {
  return (
    <section className="max-w-5xl mx-auto px-6 my-14">
      <h2 className="font-bold text-xl mb-8">Shipping Status</h2>

      {/* <div className="flex gap-x-5 mb-3">
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
          <h1 className="font-bold">Delivered</h1>
          <span className="text-gray-900 block font-medium">UPS Facility</span>
          <span className="text-gray-600 block">July 01, 2024, 3:15pm</span>
          <span className="text-gray-600 block">Sydney, Australia</span>
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
          <h1 className="font-bold">Custom Clearance Complete</h1>
          <span className="text-gray-900 block font-medium">Inbound Custom Clearance</span>
          <span className="text-gray-600 block">June 29, 2024, 5pm</span>
          <span className="text-gray-600 block">Sydney, Australia</span>
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
          <span className="text-gray-600 block">June 28, 2024, 2:45pm</span>
          <span className="text-gray-600 block">Sydney, Australia</span>
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
          <span className="text-gray-600 block">June 22, 2024, 10:30pm</span>
          <span className="text-gray-600 block">Jakarta, Indonesia</span>
        </div>
      </div> */}
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-gray-500 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            {/* <IoCheckmark /> */}
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-gray-500">
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-gray-500">Delivered</h1>
          {/* <span className="text-gray-900 block font-medium">Label Created</span>
          <span className="text-gray-600 block">June 12, 2024, 2pm</span>
          <span className="text-gray-600 block">Leeds United Kingdom</span> */}
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-gray-500 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            {/* <IoCheckmark /> */}
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-gray-500">
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-gray-500">Out for Delivery</h1>
          {/* <span className="text-gray-900 block font-medium">Label Created</span>
          <span className="text-gray-600 block">June 12, 2024, 2pm</span>
          <span className="text-gray-600 block">Leeds United Kingdom</span> */}
        </div>
      </div>

      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-gray-500 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            {/* <IoCheckmark /> */}
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-gray-500">
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-gray-500">Preparing for Delivery</h1>
          {/* <span className="text-gray-900 block font-medium">Label Created</span>
          <span className="text-gray-600 block">June 12, 2024, 2pm</span>
          <span className="text-gray-600 block">Leeds United Kingdom</span> */}
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <FcInTransit />
          </div>
          <div className="flex flex-col items-center justify-center mt-2 text-green-800">
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
            <IoEllipsisVerticalOutline />
          </div>
        </div>
        <div>
          <h1 className="font-bold">In Transit from Origin Processing</h1>
          <h2 className="font-bold">Accepted at USPS Regional Origin Facility</h2>
          <span className="text-gray-600 block">METRO NY DISTRIBUTION CENTER</span>
          <span className="text-gray-600 block">August 23, 2024, 7:38am</span>
        </div>
      </div>
      <div className="flex gap-x-5 mb-3">
        <div className="relative mb-1">
          <div className="bg-green-700 rounded-[100%] h-6 w-6 text-white font-medium flex items-center justify-center">
            <IoCheckmark />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Accepted at USPS Regional Origin Facility</h1>
          <span className="text-gray-600 block">METRO NY DISTRIBUTION CENTER</span>
          <span className="text-gray-600 block">August 23, 2024, 6:38am</span>
        </div>
      </div>
    </section>
  );
}
