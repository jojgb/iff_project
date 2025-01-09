import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import styles from "./App.module.scss";
import Navbar from "./components/navbar";
import HomePage from "./components/pages/homepage";
import MyRequest from "./components/pages/myRequest";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myRequest" element={<MyRequest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
