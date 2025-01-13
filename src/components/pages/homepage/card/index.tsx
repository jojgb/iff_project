import { FunctionComponent } from "react";
import periperalImage from "../../../../assets/itperiperal.png";
import printingImage from "../../../../assets/printing.png";
import stationaryImage from "../../../../assets/staionary.png";
import merchandiseImage from "../../../../assets/merchandise.png";

interface CardProps {
  className?: string;
  onClick?: (category: string) => void;
}

const Card: FunctionComponent<CardProps> = ({ onClick }) => {
  const handleClick = (category: string) => {
    if (onClick) {
      onClick(category);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 cursor-pointer">
      <div className="flex justify-center">
        <img
          className="hover:scale-105 transition-transform duration-300"
          src={periperalImage}
          alt="periperal"
          onClick={() => handleClick("IT - PERIPERAL")}
        />
      </div>
      <div className="flex justify-center">
        <img
          className="hover:scale-105 transition-transform duration-300"
          src={printingImage}
          alt="printing"
          onClick={() => handleClick("PRINTING")}
        />
      </div>
      <div className="flex justify-center">
        <img
          className="hover:scale-105 transition-transform duration-300"
          src={stationaryImage}
          alt="stationary"
          onClick={() => handleClick("STATIONARY")}
        />
      </div>
      <div className="flex justify-center">
        <img
          className="hover:scale-105 transition-transform duration-300"
          src={merchandiseImage}
          alt="merchandise"
          onClick={() => handleClick("MERCHANDISE")}
        />
      </div>
    </div>
  );
};

export default Card;
