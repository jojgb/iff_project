import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { setProducts } from "../../../../redux/productsSlice";
import DropDownSortModal from "../../../modal/dropDownSortModal";
import styles from "./periperal.module.scss";
import { orangeCartImage } from "../../../../image";
import { addToCart } from "../../../../redux/cartSlice";

interface Product {
  id: number | string;
  name: string;
  price: number | string;
  image: string;
  category: string;
  vendor: string;
}

const Periperal: FunctionComponent = () => {
  const dispatch = useDispatch();

  const [cartMessage, setCartMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Tambahkan state untuk loading
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Add error state
  const products = useSelector((state: RootState) => state.products.products);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedSortOption, setSelectedSortOption] =
    useState<string>("High price");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: String(product.id),
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: 1,
      })
    );

    setCartMessage(`${product.name} added to cart!`);
    setTimeout(() => {
      setCartMessage(null);
    }, 3000);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setErrorMessage(null); // Reset the error message before the request
      try {
        const response = await fetch(
          "https://65519a4c5c69a7790328f2f2.mockapi.io/employee/listProduct"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
        setErrorMessage("Sorry, something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleSortClick = () => {
    setIsModalVisible(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.vendor.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSortOption) {
      case "High price":
        return Number(b.price) - Number(a.price);
      case "Low price":
        return Number(a.price) - Number(b.price);
      case "Name A-Z":
        return a.name.localeCompare(b.name);
      case "Name Z-A":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div>
      {/* Cart Message */}
      <div
        className={`${
          cartMessage ? "visible" : "invisible"
        } fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded transition-opacity`}
      >
        {cartMessage}
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded">
          {errorMessage}
        </div>
      )}

      {/* Loading Indicator */}
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader">Loading .... </div>
        </div>
      ) : (
        <>
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
              value={searchQuery}
              onChange={handleSearchChange}
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
            {sortedProducts.map((product) => (
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
                  <button
                    className="text-orange-50 py-2 px-4 flex items-center justify-center bg-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    {orangeCartImage}
                  </button>
                </div>
                <p className="text-gray-700 text-left mb-4">
                  {`IDR ${new Intl.NumberFormat("id-ID").format(
                    Number(product.price)
                  )}.00`}
                </p>
                <div className="mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <p className="text-gray-500 text-left text-sm mb-2">
                  Vendor Name
                </p>
                <p className="text-black font-bold text-sm text-left">
                  {product.vendor}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <DropDownSortModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onApply={(category) => {
          setSelectedSortOption(category);
        }}
      />
    </div>
  );
};

export default Periperal;
