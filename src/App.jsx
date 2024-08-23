import ShippingDetails from "./ShippingDetails";
import Status from "./Status";
import UserInfo from "./UserInfo";
import logo from "./images/UPS_logo.svg";
import bar from "./images/bar.png";
// import errorImg from "./images/401.jpg";

function App() {
  return (
    <>
      <section className="flex flex-col justify-center items-center my-10">
        <img src={logo} alt="" className="mb-6" />
        <div className="flex">
          <img src={bar} alt="" />
          <img src={bar} alt="" />
        </div>
        <strong>4204575092124903627191046</strong>
      </section>
      <section className="text-red-700 text-center px-8">
        This Link is Confidential and for security purpose the link will expire in 12hours
      </section>
      <section>
        <UserInfo />

        <section>
          <div className="bg-yellow-600 text-white py-6 lg:py-10">
            <h2 className="text-center text-xl font-medium lg:text-2xl">SHIPMENT STATUS</h2>
          </div>
        </section>

        <ShippingDetails />
        <Status />
      </section>
      {/* <div className="bg-[#FEA918] w-[100vw] h-[100vh] flex items-center justify-center" >
        <img src={errorImg} alt="unauthorized img" />
      </div> */}
    </>
  );
}

export default App;
