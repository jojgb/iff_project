import { FunctionComponent, useEffect, useState } from "react";
import NavItem from "./navitem";
import {
  CartSection,
  HomeSection,
  iffImage,
  orangeDeleteImage,
} from "../../image";
import styles from "../../App.module.scss";
import Drawer from "../drawer";

interface NavbarProps {
  className?: string;
  fontColor?: string;
}

const mockCartData = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    quantity: 2,
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-2733701/canon_canon-eos-750d-kamera-dslr_full05.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 9.99,
    quantity: 1,
    image:
      "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/23/efb94525-5e38-498c-b361-391d006b70be.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 14.99,
    quantity: 3,
    image:
      "https://i.pcmag.com/imagery/reviews/06MB2dd9IF24omR8kjqGL2v-4.fit_scale.size_1028x578.v1709768556.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 14.99,
    quantity: 2,
    image:
      "https://i.pcmag.com/imagery/reviews/06MB2dd9IF24omR8kjqGL2v-4.fit_scale.size_1028x578.v1709768556.jpg",
  },
];

const Navbar: FunctionComponent<NavbarProps> = ({ className, fontColor }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartData, setCartData] = useState(mockCartData);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Handle Select All
  const handleSelectAll = () => {
    if (selectedItems.length === cartData.length) {
      setSelectedItems([]); // Deselect all if already selected
    } else {
      setSelectedItems(cartData.map((item) => item.id)); // Select all items
    }
  };

  // Handle individual item selection
  const handleSelectItem = (id: number) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  // Handle Delete selected items
  const handleDeleteSelected = () => {
    setCartData((prevData) =>
      prevData.filter((item) => !selectedItems.includes(item.id))
    );
    setSelectedItems([]); // Clear selected items after deletion
  };

  // Handle increase and decrease quantity
  const handleQuantityChange = (
    id: number,
    action: "increase" | "decrease"
  ) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  return (
    <div>
      <nav
        className={`${styles.container}fixed top-0 left-0 w-full z-50 mt-4`.concat(
          className ? " " + className : ""
        )}
      >
        <ul className="flex justify-between items-center border-b border-gray-300 pb-4">
          <NavItem child={iffImage} href="/" className={fontColor} />

          <div className="flex items-center space-x-4">
            <NavItem child={<HomeSection />} href="/" className={fontColor} />
            <NavItem
              child={<CartSection />}
              className={fontColor}
              onClick={toggleDrawer}
            />
          </div>
        </ul>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} width="w-[40%]">
        <div className="h-full overflow-auto pb-12">
          {cartData.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {/* Select All Checkbox */}
              <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2 mt-12">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === cartData.length}
                    onChange={handleSelectAll}
                    className={`${styles.checkbox} mr-8`}
                  />
                  <span
                    className="font-bold"
                    style={{
                      fontSize: "1.25rem",
                      marginLeft: "1rem",
                    }}
                  >
                    Select All
                  </span>
                </div>
                <button onClick={handleDeleteSelected} className="px-4 py-2">
                  {orangeDeleteImage}
                </button>
              </div>

              {/* List of Products */}
              {cartData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex justify-start items-center mb-4 border-b border-gray-300 pb-8"
                  >
                    {/* Product Info */}
                    <div className="flex items-center flex-1">
                      {/* Checkbox for Individual Item */}
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className={`${styles.checkbox} mr-8`}
                      />
                      <div className="flex-shrink-0">
                        <img
                          src={item.image || "https://via.placeholder.com/150"}
                          alt={item.name}
                          className="w-32 h-32 object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-col ml-4 flex-1">
                        <div className="flex justify-between mb-2">
                          {/* Nama Produk */}
                          <div className="flex flex-col">
                            <p className="font-semibold text-lg">{item.name}</p>
                          </div>

                          {/* Harga */}
                          <div className="text-right ml-4">
                            <p className="font-semibold text-lg text-black">
                              IDR{" "}
                              {new Intl.NumberFormat("id-ID").format(
                                item.price * item.quantity
                              )}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Control */}
                        <div className="flex justify-between items-center mt-1">
                          <div className="text-left">
                            <p className="text-sm text-gray-500">Vendor Name</p>
                            <p className="text-sm text-gray-800 font-medium mt-0">
                              Unknown Vendor
                            </p>
                          </div>

                          {/* Quantity */}
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "decrease")
                              }
                              className="px-3 py-2 bg-white border border-gray-300 rounded"
                            >
                              -
                            </button>
                            <span className="border border-gray-300 px-4 py-2 rounded text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "increase")
                              }
                              className="px-3 py-2 bg-white border border-gray-300 rounded"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div>
                <div className={`${styles.productSelected} text-left`}>
                  <span className="font-bold">{cartData.length}</span> Product
                  Selected
                </div>
                <div className="flex space-x-4 font-semibold mt-4">
                  <p>Total</p>
                  <p>10,100,000.00</p>
                </div>
                <div className="mt-4 ">
                  <button className={`${styles.nextButton} w-full`}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
