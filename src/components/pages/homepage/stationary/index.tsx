import { FunctionComponent, useState } from "react";
import { orangeCartImage } from "../../../../image";
import styles from "../../homepage/periperal/periperal.module.scss";
import DropDownSortModal from "../../../modal/dropDownSortModal";

interface StationaryProps {
  className?: string;
}
const products = [
  {
    id: 1,
    name: "Thinkpad Ryzen 5 Pro",
    price: "IDR 10,000,000.00",
    vendor: "PT MSBU",
    category: "Device",
    image:
      "https://static.retailworldvn.com/Products/Images/12217/321625/laptop-lenovo-ideapad-slim-1-14igl7-celeron-n4020-8gb-512gb-win11-82v6008bid-cloud-grey-1.jpg",
  },
  {
    id: 2,
    name: "Asus Charger",
    price: "IDR 100,000.00",
    vendor: "PT Intikom",
    category: "Device",
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/23/efb94525-5e38-498c-b361-391d006b70be.png",
  },
  {
    id: 3,
    name: "Macbook Air 2024",
    price: "IDR 10,000,000.00",
    vendor: "PT MSBU",
    category: "Device",
    image:
      "https://i.pcmag.com/imagery/reviews/06MB2dd9IF24omR8kjqGL2v-4.fit_scale.size_1028x578.v1709768556.jpg",
  },
  {
    id: 4,
    name: "Mac Charger",
    price: "IDR 10,000,000.00",
    vendor: "PT Intikom",
    category: "Device",
    image:
      "https://cdsassets.apple.com/live/7WUAS350/images/macbook-pro/35w-usb-c-power-adapter-magsafe-charge-cable-2022.png",
  },
  {
    id: 5,
    name: "Camera DSLR",
    price: "IDR 10,000,000.00",
    vendor: "PT MSBU",
    category: "Device",
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-2733701/canon_canon-eos-750d-kamera-dslr_full05.jpg",
  },
  {
    id: 6,
    name: "Tablet",
    price: "IDR 15,000,000.00",
    vendor: "PT Intikom",
    category: "Device",
    image: "https://m.media-amazon.com/images/I/71KNiKiMbiL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "Keyboard",
    price: "IDR 500,000.00",
    vendor: "PT MSBU",
    category: "Device",
    image:
      "https://images-cdn.ubuy.co.id/65ff00c5bb7b7165e210ab39-arabic-and-english-computer-keyboard.jpg",
  },
  {
    id: 8,
    name: "3D Printer",
    price: "IDR 100,000,000.00",
    vendor: "PT MSBU",
    category: "Device",
    image:
      "https://images-cdn.ubuy.co.id/65700e1167b6836c2157a757-official-creality-ender-3-3d-printer.jpg",
  },
];

const Stationary: FunctionComponent<StationaryProps> = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [selectedSortOption, setSelectedSortOption] =
    useState<string>("High price");

  const handleSortClick = () => {
    setIsModalVisible(true); // Open modal
  };

  return (
    <div>
      {/* Sub Category Section */}
      <div className="flex gap-4 mb-6 items-start">
        <button className={styles.subCategory}>Device</button>
        <button className={styles.subCategory}>Sub Category</button>
        <button className={styles.subCategory}>Sub Category</button>
        <button className={styles.subCategory}>Sub Category</button>
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
          <button
            className="border border-gray-300 rounded-md p-2 flex items-center"
            onClick={handleSortClick}
          >
            <span>{selectedSortOption}</span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-6 pb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition"
          >
            <div className={`${styles.categoryText}`}>
              <p className="text-gray-600 mb-2">{product.category}</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg text-left mb-2">
                {product.name}
              </h3>
              <button className="text-orange-50 py-2 px-4 flex items-center justify-center bg-white">
                {orangeCartImage}
              </button>
            </div>
            <p className="text-gray-700 text-left mb-4">{product.price}</p>
            <div className="mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
            <p className="text-gray-500 text-left text-sm mb-2">Vendor Name</p>
            <p className="text-black font-bold text-sm text-left">
              {product.vendor}
            </p>
          </div>
        ))}
      </div>
      <DropDownSortModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onChange={(category) => setSelectedSortOption(category)}
      />
    </div>
  );
};

export default Stationary;
