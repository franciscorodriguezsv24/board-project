import { useState } from "react";
import styles from "./filter.module.scss";
import { ListFilter } from "lucide-react";

type FilterStatusProps = {
  filterValue: [string, React.Dispatch<React.SetStateAction<string>>];
};

export const FilterStatus = ({ filterValue }: FilterStatusProps) => {
  const [isFilter, setIsFilter] = useState(false);
  const [value, setValue] = filterValue;
  return (
    <div className={styles.filterSelectContainer}>
      <button
        className={styles.filterCategory}
        onClick={(e) => {
          e.preventDefault();
          setIsFilter(!isFilter);
        }}
      >
        <ListFilter />
        {value || "filter"}
      </button>
      <div
        className={
          isFilter ? styles.valueFilterBlock : styles.valuesFilterhidden
        }
      >
        <button
          onClick={() => {
            setValue("Active");
            setIsFilter(!isFilter);
          }}
        >
          Active
        </button>
        <button
          onClick={() => {
            setValue("Prospective");
            setIsFilter(!isFilter);
          }}
        >
          Prospective
        </button>
        <button
          onClick={() => {
            setValue("Archived");
            setIsFilter(!isFilter);
          }}
        >
          Archived
        </button>
      </div>
    </div>
  );
};
