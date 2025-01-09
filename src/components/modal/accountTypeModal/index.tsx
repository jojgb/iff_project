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
  const [selectedOption, setSelectedOption] = useState<string>("Expense");
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
          <div
            className="text-left ml-4 mt-4 cursor-pointer border-b border-gray-400 pb-4 overflow-y-scroll"
            style={{ height: "6.25rem" }}
          >
            {accountTypeOption.map((option) => (
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
