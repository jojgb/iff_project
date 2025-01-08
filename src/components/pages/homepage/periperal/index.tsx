import { FunctionComponent } from "react";

interface PeriperalProps {
  className?: string;
}
const products = [
  {
    id: 1,
    name: "Thinkpad Ryzen 5 Pro",
    price: "IDR 10,000,000.00",
    vendor: "PT MSBU",
    image: "path-to-thinkpad-image",
  },
  {
    id: 2,
    name: "Asus Charger",
    price: "IDR 100,000.00",
    vendor: "PT Intikom",
    image: "path-to-asus-charger-image",
  },
  {
    id: 3,
    name: "Macbook Air 2024",
    price: "IDR 10,000,000.00",
    vendor: "PT MSBU",
    image: "path-to-macbook-image",
  },
  {
    id: 4,
    name: "Mac Charger",
    price: "IDR 10,000,000.00",
    vendor: "PT Intikom",
    image: "path-to-mac-charger-image",
  },
  {
    id: 5,
    name: "Camera DSLR",
    price: "IDR 10,000,000.00",
    vendor: "PT MSBU",
    image: "path-to-camera-image",
  },
  {
    id: 6,
    name: "Tablet",
    price: "IDR 15,000,000.00",
    vendor: "PT Intikom",
    image: "path-to-tablet-image",
  },
  {
    id: 7,
    name: "Keyboard",
    price: "IDR 500,000.00",
    vendor: "PT MSBU",
    image: "path-to-keyboard-image",
  },
  {
    id: 8,
    name: "3D Printer",
    price: "IDR 100,000,000.00",
    vendor: "PT MSBU",
    image: "path-to-3d-printer-image",
  },
];

const Periperal: FunctionComponent<PeriperalProps> = () => {
  return (
    <div
    // className={styles.periperalSection}
    >
      {/* Sub Category Section */}
      <div className="flex gap-4 mb-6">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-full">
          Device
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-full">
          Sub Category
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-full">
          Sub Category
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded-full">
          Sub Category
        </button>
      </div>

      {/* Search and Sort Section */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search item, vendor.."
          className="border border-gray-300 rounded-md p-2 w-1/3"
        />
        <div className="flex items-center gap-2">
          <span>Sort by</span>
          <select className="border border-gray-300 rounded-md p-2">
            <option>Low Price</option>
            <option>High Price</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition"
          >
            <div className="mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <div className="mb-2 text-orange-500 text-sm font-medium">
              Device
            </div>
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.price}</p>
            <p className="text-gray-500 text-sm mb-4">
              Vendor Name: {product.vendor}
            </p>
            <button className="text-orange-500 border border-orange-500 rounded-full py-2 px-4 flex items-center justify-center">
              <span className="material-icons">add_shopping_cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Periperal;
