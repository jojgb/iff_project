import React, { useEffect, useMemo, useState } from "react";
import styles from "../../modal/dropDownSortModal/modal.module.scss";
import AccountTypeModal from "../accountTypeModal";
import { DropDownIcon } from "../../../image";

interface FinancialModalProps {
  isVisible: boolean;
  onClose: () => void;
  onApply?: (category: string) => void;
}

const FinancialModal: React.FC<FinancialModalProps> = ({
  isVisible,
  onClose,
  //   onApply,
}) => {
  // account type
  const [isAccountTypeModalVisible, setIsAccountTypeModalVisible] =
    useState<boolean>(false);
  const [accountType, setAccountType] = useState<string>("");

  // budget account
  //     const [isBudgetAccountModalVisible, setisBudgetAccountModalVisible] =
  //     useState<boolean>(false);
  //   const [budgetAccount, setBudgetAccount] = useState<string>("106101/OTHER RECEIVABLES");

  const body = useMemo(() => {
    return {
      accountType,
    };
  }, [accountType]);

  console.log(body);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  //   const handleSortChange = (option: string) => {
  //     setSelectedSortOption(option); // Update selected option in modal
  //   };

  const handleApplyButton = () => {
    // onApply?.(selectedSortOption); // Send the selected option to the parent
    onClose(); // Close the modal
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="relative flex items-center">
            <p className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold">
              Financial Findims
            </p>
            <button
              onClick={onClose}
              className="ml-auto text-gray-600 bg-white"
            >
              X
            </button>
          </div>
          <div
            className="text-left  mt-4 cursor-pointer  pb-4 overflow-y-scroll"
            style={{ height: "50vh" }}
          >
            {/* order date  */}
            <div>
              <label
                htmlFor="orderDate"
                className="block text-sm font-medium text-gray-700"
              >
                Order Date
              </label>
              <input
                type="date"
                id="orderDate"
                name="orderDate"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* account type  */}
            <div>
              <label
                htmlFor="accountType"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Account Type
              </label>
              <button
                className="border border-gray-300 rounded-md p-2 flex justify-between w-full bg-white"
                onClick={() => setIsAccountTypeModalVisible(true)}
              >
                <span className="text-sm">
                  {accountType ? accountType : "Please Select"}
                </span>
                <DropDownIcon />
              </button>
            </div>
            {/* budget account  */}
            <div>
              <label
                htmlFor="budgetAccount"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Budget Account
              </label>
              <select
                id="budgetAccount"
                name="budgetAccount"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Budget Account</option>
                <option value="marketing">Marketing</option>
                <option value="operations">Operations</option>
                <option value="hr">Human Resources</option>
                <option value="it">IT</option>
              </select>
            </div>
            {/* fixed asset number  */}
            <div>
              <label
                htmlFor="fixedAssetNumber"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Fixed Asset Number
              </label>
              <select
                id="fixedAssetNumber"
                name="fixedAssetNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Fixed Asset Number</option>
                <option value="fa001">FA001</option>
                <option value="fa002">FA002</option>
                <option value="fa003">FA003</option>
                <option value="fa004">FA004</option>
              </select>
            </div>
            {/* tax group */}
            <div>
              <label
                htmlFor="taxGroup"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Tax Group
              </label>
              <select
                id="taxGroup"
                name="taxGroup"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Tax Group</option>
                <option value="vat">VAT</option>
                <option value="salesTax">Sales Tax</option>
                <option value="incomeTax">Income Tax</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* total price  */}
            <div>
              <label
                htmlFor="totalPrice"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Total Price
              </label>
              <input
                type="text"
                id="totalPrice"
                name="totalPrice"
                disabled
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              className={`${styles.applyButton} w-full`}
              onClick={handleApplyButton}
            >
              Create PO
            </button>
          </div>
        </div>
      </div>
      <AccountTypeModal
        isVisible={isAccountTypeModalVisible}
        onClose={() => setIsAccountTypeModalVisible(false)}
        onApply={(opt) => {
          setAccountType(opt);
        }}
      />
    </div>
  );
};

export default FinancialModal;
