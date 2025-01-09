import React, { useEffect, useMemo, useState } from "react";
import styles from "../../modal/dropDownSortModal/modal.module.scss";
import AccountTypeModal from "../accountTypeModal";
import { DropDownIcon } from "../../../image";
import BudgetAccountModal from "../budgetAccountModal";
import FixedAssetNumberModal from "../fixedAssetNumberModal";
import TotalTaxGroupModal from "../totalTaxGroupModal";

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
  const [isBudgetAccountModalVisible, setisBudgetAccountModalVisible] =
    useState<boolean>(false);
  const [budgetAccount, setBudgetAccount] = useState<string>("");

  // fixed asset number
  const [isFixedAssetNumberModalVisible, setIsFixedAssetNumberModalVisible] =
    useState<boolean>(false);
  const [fixedAssetNumber, setFixedAssetNumber] = useState<string>("");

  // total tax group
  const [isTotalTaxModalVisible, setIsTotalTaxModalVisible] =
    useState<boolean>(false);
  const [totalTaxGroup, setTotalTaxGroup] = useState<string>("");

  const body = useMemo(() => {
    return {
      accountType,
      budgetAccount,
      fixedAssetNumber,
      totalTaxGroup,
    };
  }, [accountType, budgetAccount, fixedAssetNumber, totalTaxGroup]);

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
              <button
                className="border border-gray-300 rounded-md p-2 flex justify-between w-full bg-white"
                onClick={() => setisBudgetAccountModalVisible(true)}
              >
                <span className="text-sm">
                  {budgetAccount ? budgetAccount : "Please Select"}
                </span>
                <DropDownIcon />
              </button>
            </div>
            {/* fixed asset number  */}
            <div>
              <label
                htmlFor="fixedAssetNumber"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Fixed Asset Number
              </label>
              <button
                className="border border-gray-300 rounded-md p-2 flex justify-between w-full bg-white"
                onClick={() => setIsFixedAssetNumberModalVisible(true)}
              >
                <span className="text-sm">
                  {fixedAssetNumber ? fixedAssetNumber : "Please Select"}
                </span>
                <DropDownIcon />
              </button>
            </div>
            {/* tax group */}
            <div>
              <label
                htmlFor="taxGroup"
                className="block text-sm font-medium text-gray-700 mt-4"
              >
                Tax Group
              </label>
              <button
                className="border border-gray-300 rounded-md p-2 flex justify-between w-full bg-white"
                onClick={() => setIsTotalTaxModalVisible(true)}
              >
                <span className="text-sm">
                  {totalTaxGroup ? totalTaxGroup : "Please Select"}
                </span>
                <DropDownIcon />
              </button>
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
                value="-"
                disabled
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
             focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm
             disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
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
      <BudgetAccountModal
        isVisible={isBudgetAccountModalVisible}
        onClose={() => setisBudgetAccountModalVisible(false)}
        onApply={(opt) => {
          setBudgetAccount(opt);
        }}
      />
      <FixedAssetNumberModal
        isVisible={isFixedAssetNumberModalVisible}
        onClose={() => setIsFixedAssetNumberModalVisible(false)}
        onApply={(opt) => {
          setFixedAssetNumber(opt);
        }}
      />
      <TotalTaxGroupModal
        isVisible={isTotalTaxModalVisible}
        onClose={() => setIsTotalTaxModalVisible(false)}
        onApply={(opt) => {
          setTotalTaxGroup(opt);
        }}
      />
    </div>
  );
};

export default FinancialModal;
