import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_image, product_title, price } = gadget;

  return (
    <div className="card bg-base-100 w-92 shadow-xl">
      <figure>
        <img
          src={product_image}
          alt={product_title}
          className="w-10/12 h-[250px] rounded-2xl"
        />
      </figure>
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
