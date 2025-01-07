import "./App.css";
import styles from "./App.module.scss";
import Navbar from "./components/navbar";
import HomePage from "./components/pages/homepage";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
