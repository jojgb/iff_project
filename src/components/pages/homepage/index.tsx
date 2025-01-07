import { FunctionComponent, useState } from "react";
import styles from "./homePage.module.scss";
import Card from "./card";

interface HomePageProps {
  className?: string;
}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const [needSelected, setNeedSelected] = useState<string>("");
  const handleCategoryClick = (category: string) => {
    setNeedSelected(category);
    console.log(`Selected category: ${category}`);
  };

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
          <h1>E-Catalogue</h1>
          {needSelected ? (
            <div>
              <h1>{needSelected}</h1>
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
        <Card onClick={handleCategoryClick} />
      </section>
    </div>
  );
};

export default HomePage;
