import { FunctionComponent } from "react";

interface StationaryProps {
  className?: string;
}

const Stationary: FunctionComponent<StationaryProps> = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Stationary</h1>
      <div className="flex flex-wrap justify-center gap-4"></div>
    </div>
  );
};

export default Stationary;
