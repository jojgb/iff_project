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
import FinancialModal from "../modal/financialModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeSelectedFromCart, updateQuantity } from "../../redux/cartSlice";

interface NavbarProps {
  className?: string;
  fontColor?: string;
}

//   {
//     id: 1,
//     name: "Product 1",
//     price: 19.99,
//     quantity: 2,
//     image:
//       "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-2733701/canon_canon-eos-750d-kamera-dslr_full05.jpg",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 9.99,
//     quantity: 1,
//     image:
//       "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/23/efb94525-5e38-498c-b361-391d006b70be.png",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: 14.99,
//     quantity: 3,
//     image:
//       "https://i.pcmag.com/imagery/reviews/06MB2dd9IF24omR8kjqGL2v-4.fit_scale.size_1028x578.v1709768556.jpg",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     price: 14.99,
//     quantity: 2,
//     image:
//       "https://i.pcmag.com/imagery/reviews/06MB2dd9IF24omR8kjqGL2v-4.fit_scale.size_1028x578.v1709768556.jpg",
//   },
// ];

const Navbar: FunctionComponent<NavbarProps> = ({ className, fontColor }) => {
  const dispatch = useDispatch();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isFinancialModalOpen, setIsFinancialModalOpen] = useState(false);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const carts = useSelector((state: RootState) => state.carts.items);
  console.log({ carts });

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Handle Select All
  const handleSelectAll = () => {
    if (selectedItems.length === carts.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(carts.map((item) => item.id));
    }
  };

  const handleSelectItem = (id: string) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = () => {
    dispatch(removeSelectedFromCart(selectedItems));
    setSelectedItems([]);
  };

  const handleQuantityChange = (
    id: string,
    action: "increase" | "decrease"
  ) => {
    const item = carts.find((item) => item.id === id);
    if (item) {
      const newQuantity =
        action === "increase"
          ? item.quantity + 1
          : Math.max(item.quantity - 1, 1);
      dispatch(updateQuantity({ id, quantity: newQuantity })); // Update quantity in Redux
    }
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
              className={`${fontColor} cursor-pointer`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                toggleDrawer();
              }}
            />
          </div>
        </ul>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} width="w-[40%]">
        <div className="h-full overflow-auto pb-12">
          {carts.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {/* Select All Checkbox */}
              <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2 mt-12">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === carts.length}
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
              {carts.map((item) => {
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
                  <span className="font-bold">{carts.length}</span> Product
                  Selected
                </div>
                <div className="flex space-x-4 font-semibold mt-4">
                  <p>Total</p>
                  <p>10,100,000.00</p>
                </div>
                <div className="mt-4 ">
                  <button
                    className={`${styles.nextButton} w-full`}
                    onClick={() => {
                      setIsDrawerOpen(false);
                      setIsFinancialModalOpen(true);
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Drawer>
      <FinancialModal
        onClose={() => setIsFinancialModalOpen(false)}
        onApply={() => setIsFinancialModalOpen(false)}
        isVisible={isFinancialModalOpen}
      />
    </div>
  );
};

export default Navbar;
