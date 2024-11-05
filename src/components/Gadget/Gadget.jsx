import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_image, product_title, price } = gadget;

  return (
    <div className="card bg-base-100 w-92 shadow-xl ">
      <div className="w-92 h-[250px] rounded-2xl m-5 overflow-hidden border border-gray-200">
        <img
          src={product_image} // Replace with your actual image URL
          alt={product_title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="card-body">
        <h2 className="card-title text-xl">{product_title}</h2>
        <p>Price : {price}$</p>
        <div className="card-actions justify-center">
          <Link to={`/product/${product_id}`}>
            <button className="px-6 py-3 border-2 border-[#9538E2] rounded-full text-[#9538E2]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
