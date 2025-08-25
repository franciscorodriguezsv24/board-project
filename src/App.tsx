import styles from "./App.module.scss";
import { Home } from "./page/home/Home";

function App() {
  return (
    <div className={styles.firstSass}>
      <Home />
    </div>
  );
}

export default App;
