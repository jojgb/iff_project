import { FunctionComponent, useMemo, useState } from "react";
import styles from "./homePage.module.scss";
import Card from "./card";
import Periperal from "./periperal";
import Printing from "./printing";
import Stationary from "./stationary";
import Merchandise from "./merchandise";

interface HomePageProps {
  className?: string;
}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [needSelected, setNeedSelected] = useState<string>("");
  const handleCategoryClick = (category: string) => {
    setNeedSelected(category);
    console.log(`Selected category: ${category}`);
  };

  const renderChildList = useMemo(() => {
    switch (needSelected) {
      case "IT - PERIPERAL":
        return <Periperal />;
      case "PRINTING":
        return <Printing />;
      case "STATIONARY":
        return <Stationary />;
      case "MERCHANDISE":
        return <Merchandise />;
      default:
        return;
    }
  }, [needSelected]);

  return (
    <div>
      {/* tab section  */}
      <section className={styles.tabSection}>
        <div className="flex justify-center items-center gap-4">
          <p>Home</p>
          <p>My Request</p>
          <p>Invoice</p>
        </div>
      </section>
      {/* mid Section  */}
      <section className={styles.midSection}>
        <div>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="breadcrumb">
            <ol className="flex gap-2 text-sm">
              {needSelected && (
                <>
                  <li className="text-orange-500">Home</li>
                  <span className="text-gray-400">{">"}</span>
                  <li className="font-medium">{needSelected}</li>
                </>
              )}
            </ol>
          </nav>
          <p className={styles.midSectionTitle}>E-Catalogue</p>
          {needSelected ? (
            <div className={styles.textMidSection}>
              <p>{needSelected}</p>
            </div>
          ) : (
            <div>
              <h1>Select what you need here</h1>
              <p className="mt-4">
                Select your needs based on the categories below
              </p>
            </div>
          )}
        </div>
      </section>
      {/* card section  */}
      <section className={styles.cardSection}>
        {!needSelected ? <Card onClick={handleCategoryClick} /> : null}
      </section>
      {/* sort and list section  */}
      <div className="mt-8">{renderChildList}</div>
    </div>
  );
};

export default HomePage;
