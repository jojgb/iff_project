import { useNavigate } from "react-router-dom";
import styles from "../../../App.module.scss";
import SendToVendorModal from "../../modal/sendToVendorModal";
import { useState, useEffect } from "react";
import { downloadImage, eyeImage, trashImage } from "../../../image";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const MyRequest = () => {
  const data = [
    {
      id: 1,
      status: "In Review",
      poNumber: "2024.001/I/HR&GA",
      itemName: "Thinkpad Ryzen 5 Pro",
      vendorName: "Asus",
      reasonRejection: "-",
      additionalProducts: 2,
    },
    {
      id: 2,
      status: "Rejected",
      poNumber: "2024.001/I/HR&GA",
      itemName: "Product D",
      vendorName: "MSBU",
      reasonRejection: "asd",
      additionalProducts: 5,
    },
    {
      id: 3,
      status: "Approved",
      poNumber: "2024.001/I/HR&GA",
      itemName: "Product F",
      vendorName: "Apple",
      reasonRejection: "-",
      additionalProducts: 1,
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [statusFilter, setStatusFilter] = useState<string>(""); // Status filter state
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const carts = useSelector((state: RootState) => state.carts.items);

  const financialData = useSelector((state: RootState) => state.financial);
  console.log({ financialData, filteredData, carts });

  const [isSendToVendorModalVisible, setIsSendToVendorModalVisible] =
    useState<boolean>(false);

  // UseEffect to apply filtering whenever statusFilter or searchTerm changes
  useEffect(() => {
    let filtered = data;

    // Apply status filter if a status is selected
    if (statusFilter) {
      filtered = filtered.filter((row) => row.status === statusFilter);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (row) =>
          row.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.poNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.vendorName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, searchTerm]);

  useEffect(() => {
    if (financialData) {
      const body = {
        id: filteredData.length + 1,
        status: "In Review",
        additionalProducts: 1,
        poNumber: financialData.fixedAssetNumber,
        itemName: carts[0]?.name || "Unknown Item",
        vendorName: "MSBU",
        reasonRejection: "-",
      };

      setFilteredData([...filteredData, body]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value); // Update status filter state
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "In Review":
        return "bg-orange-100 text-orange-500";
      case "Rejected":
        return "bg-red-100 text-red-500";
      case "Approved":
        return "bg-green-100 text-green-500";
      default:
        return "";
    }
  };

  return (
    <div className="p-6">
      {/* tab section */}
      <section className={styles.tabSection}>
        <div className="flex justify-center items-center gap-4 cursor-pointer">
          <p onClick={() => navigate("/")}>Home</p>
          <p className={styles.tab}>My Request</p>
          <p onClick={() => navigate("/*")}>Invoice</p>
        </div>
      </section>

      {/* mid Section */}
      <section className="text-left">
        <h1 className="text-2xl font-bold mt-6">My Request</h1>
        <p className="text-gray-500 mb-6">
          On this page you can see the progress of your order
        </p>
      </section>

      <div className="mb-4 flex justify-between">
        <select
          className="border rounded px-3 py-2 text-gray-500"
          defaultValue="Choose Status"
          onChange={handleStatusChange}
        >
          <option value="">Choose Status</option>
          <option value="In Review">In Review</option>
          <option value="Rejected">Rejected</option>
          <option value="Approved">Approved</option>
        </select>
        <input
          type="text"
          placeholder="Search.."
          className="border rounded px-3 py-2 w-1/3"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Action</th>
            <th className="border px-4 py-2">Status Approval</th>
            <th className="border px-4 py-2">PO Number Letter</th>
            <th className="border px-4 py-2">Item Name</th>
            <th className="border px-4 py-2">Vendor Name</th>
            <th className="border px-4 py-2">Reason Rejection</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="border px-4 py-2 flex justify-center space-x-2">
                <div>{eyeImage}</div>
                {row.status === "Rejected" && trashImage}
                {row.status === "Approved" && downloadImage}
              </td>
              <td className="p-2 border-2">
                <div
                  className={`border px-2 py-1 rounded-full text-center text-sm ${getStatusClass(
                    row.status
                  )}`}
                >
                  {row.status}
                </div>
              </td>
              <td className="border px-4 py-2">{row.poNumber}</td>
              <td className="border px-4 py-2 flex justify-between items-center">
                {row.itemName}
                <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2">
                  +{row.additionalProducts} Product
                </span>
              </td>
              <td className="border px-4 py-2">{row.vendorName}</td>
              <td className="border px-4 py-2">{row.reasonRejection}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-start mt-4">
        <button
          className="p-2 bg-orange-500 text-white rounded-md"
          onClick={() => setIsSendToVendorModalVisible(true)}
        >
          Send to Vendor
        </button>
      </div>

      <SendToVendorModal
        isVisible={isSendToVendorModalVisible}
        onClose={() => setIsSendToVendorModalVisible(false)}
        onApply={() => {
          setIsSendToVendorModalVisible(false);
        }}
      />
    </div>
  );
};

export default MyRequest;
