import { FunctionComponent } from "react";
import periperalImage from "../../../../assets/itperiperal.png";
import printingImage from "../../../../assets/printing.png";
import stationaryImage from "../../../../assets/staionary.png";
import merchandiseImage from "../../../../assets/merchandise.png";

interface CardProps {
  className?: string;
}

const Card: FunctionComponent<CardProps> = () => {
  return (
    <div className="flex gap-4">
      <img src={periperalImage} alt="periperal" />
      <img src={printingImage} alt="printing" />
      <img src={stationaryImage} alt="stationary" />
      <img src={merchandiseImage} alt="merchandise" />
    </div>
  );
};

export default Card;
