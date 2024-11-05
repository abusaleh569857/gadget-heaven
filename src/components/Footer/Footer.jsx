const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-10 my-6">
      <div className="text-center my-6">
        <h2 className="text-3xl font-bold">Gadget Heaven</h2>
        <p className="text-md text-gray-500 mt-5">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center px-24 md:justify-between text-center md:text-left space-y-4 md:space-y-0">
        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <ul>
            <li>
              <a className="link link-hover  text-gray-500">Product Support</a>
            </li>
            <li>
              <a className="link link-hover  text-gray-500">Order Tracking</a>
            </li>
            <li>
              <a className="link link-hover  text-gray-500">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a className="link link-hover  text-gray-500">Returns</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul>
            <li>
              <a className="link link-hover  text-gray-500">About Us</a>
            </li>
            <li>
              <a className="link link-hover  text-gray-500">Careers</a>
            </li>
            <li>
              <a className="link link-hover  text-gray-500">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul>
            <li>
              <a className="link link-hover  text-gray-500">Terms of Service</a>
            </li>
            <li>
              <a className="link link-hover  text-gray-500">Privacy Policy</a>
            </li>
            <li>
              <a className="link link-hover  text-gray-500">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
