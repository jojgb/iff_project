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
    <div className="flex gap-4 cursor-pointer">
      <img
        src={periperalImage}
        alt="periperal"
        onClick={() => handleClick("IT - PERIPERAL")}
      />
      <img
        src={printingImage}
        alt="printing"
        onClick={() => handleClick("PRINTING")}
      />
      <img
        src={stationaryImage}
        alt="stationary"
        onClick={() => handleClick("STATIONARY")}
      />
      <img
        src={merchandiseImage}
        alt="merchandise"
        onClick={() => handleClick("MERCHANDISE")}
      />
    </div>
  );
};

export default Card;
