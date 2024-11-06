import BannerImage from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative pb-5 lg:pb-[420px]">
      <div className="bg-[#9538E2] pt-12 pb-5 lg:pb-52 ">
        <h1 className="text-xl md:text-3xl lg:text-5xl  font-bold w-[80%] text-center text-white mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="py-6 text-sm w-[55%] text-center text-white  mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center">
          {/* <Link
            to="/dashboard"
            className=" bg-white text-[#9538E2] rounded-3xl px-6 py-2"
          >
            Shop Now
          </Link> */}
          <Link
            to="/dashboard"
            className="bg-white text-[#9538E2] rounded-3xl px-6 py-2 hover:bg-[#9538E2] hover:text-white transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="hidden lg:block absolute left-[120px] top-[300px] w-[80%] h-[500px] border-2 border-gray-200 rounded-2xl">
        <img
          className="p-5 rounded-[32px] w-full h-full"
          src={BannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
