import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  width = "w-96",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 ${width} bg-white shadow-xl z-50 p-4 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-start">
          <button onClick={onClose} className="text-gray-600 bg-white">
            X
          </button>
          <p className="text-xl font-semibold ml-4">My Cart</p>
        </div>

        {children}
      </div>
    </>
  );
};

export default Drawer;
