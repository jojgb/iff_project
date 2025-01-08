import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";

interface DropDownSortModalProps {
  isVisible: boolean;
  onClose: () => void;
  onApply?: (category: string) => void;
}

const SORT_OPTIONS = ["High price", "Low price", "Latest", "Oldest"];

const DropDownSortModal: React.FC<DropDownSortModalProps> = ({
  isVisible,
  onClose,
  onApply,
}) => {
  const [selectedSortOption, setSelectedSortOption] =
    useState<string>("High price");

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

  const handleSortChange = (option: string) => {
    setSelectedSortOption(option); // Update selected option in modal
  };

  const handleApplyButton = () => {
    onApply?.(selectedSortOption); // Send the selected option to the parent
    onClose(); // Close the modal
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div>
          <h2 className="text-left">SORT</h2>
          <div
            className="text-left ml-4 mt-4 cursor-pointer border-b border-gray-400 pb-4 overflow-y-scroll"
            style={{ height: "6.25rem" }}
          >
            {SORT_OPTIONS.map((option) => (
              <p
                key={option}
                className={`mb-2 ${
                  selectedSortOption === option ? styles.backgroundText : ""
                }`}
                onClick={() => handleSortChange(option)}
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

export default DropDownSortModal;
