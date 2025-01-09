import { FunctionComponent, useEffect, useState } from "react";
import styles from "../dropdownModal.module.scss";
import { accountTypeOption } from "../../../constant";

interface AccountTypeModalProps {
  isVisible: boolean;
  onClose: () => void;
  onApply?: (category: string) => void;
}

const AccountTypeModal: FunctionComponent<AccountTypeModalProps> = ({
  isVisible,
  onClose,
  onApply,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredOptions, setFilteredOptions] =
    useState<string[]>(accountTypeOption);

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

  useEffect(() => {
    // Filter opsi berdasarkan pencarian
    setFilteredOptions(
      accountTypeOption.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  if (!isVisible) return null;

  const handleChangeOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleApplyButton = () => {
    onApply?.(selectedOption);
    onClose();
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div>
          <h2 className="text-left">ACCOUNT TYPE</h2>

          {/* Input Search */}
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-2 py-1 mt-2 mb-4 h-12"
          />

          {/* List Options */}
          <div
            className="text-left ml-4 mt-4 cursor-pointer border-b border-gray-400 pb-4 overflow-y-scroll"
            style={{ height: "6.25rem" }}
          >
            {filteredOptions.map((option) => (
              <p
                key={option}
                className={`mb-2 ${
                  selectedOption === option ? styles.backgroundText : ""
                }`}
                onClick={() => handleChangeOption(option)}
              >
                {option}
              </p>
            ))}
          </div>

          <div className="text-right mt-4">
            <button className={styles.applyButton} onClick={handleApplyButton}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTypeModal;
