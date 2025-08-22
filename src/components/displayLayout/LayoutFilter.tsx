import { useState } from "react";
import styles from "./layoutDisplay.module.scss";
import { Grid2X2, Rows3, Settings2 } from "lucide-react";

type FilterStatusProps = [string, React.Dispatch<React.SetStateAction<string>>];

export const LayoutFilter = ([layoutWay, setLayoutWay]: FilterStatusProps) => {
  const [view, setView] = useState(false);

  return (
    <div className={styles.valueDisplayCardContainer}>
      <button
        className={styles.filterDisplayView}
        onClick={() => setView(!view)}
      >
        {" "}
        <Settings2 />
        {layoutWay || "Display"}
      </button>
      <div
        className={
          view ? styles.valueDisplayCardBlock : styles.valueDisplayCardHidden
        }
      >
        <button
          onClick={() => {
            setLayoutWay("Row");
            setView(!view);
          }}
        >
          <Rows3 />
          Row
        </button>
        <button
          onClick={() => {
            setLayoutWay("Grid");
            setView(!view);
          }}
        >
          <Grid2X2 />
          Grid
        </button>
      </div>
    </div>
  );
};
