import { Sidebar } from "../../components/sidebar/Sidebar";
import { SearchIcon, PlusIcon } from "lucide-react";
import styles from "./home.module.scss";
import { SidebarMock } from "../../mock/sidebar";
import { Suspense, useState } from "react";
import { Card } from "../../components/card/Card";
import { FilterStatus } from "../../components/filter/FilterStatus";
import { LayoutFilter } from "../../components/displayLayout/LayoutFilter";
import clsx from "clsx";

export function Home() {
  const filterValue = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const layoutWay = useState<string>("");

  function searchFilter(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  return (
    <div className={styles.homeContainer}>
      <Sidebar nav={SidebarMock} />
      <div className={styles.homeDashboardContainer}>
        <div className={styles.homeDashboardHead}>
          <h2>Clients</h2>
          <div className={styles.homeDashboardActions}>
            <div className={styles.homeDashboardActionsInputs}>
              <input
                className={styles.homeDashboardInput}
                onChange={searchFilter}
                value={search}
              ></input>
              <SearchIcon className={styles.buttonSearchIcon} size={16} />
            </div>
            <button className={styles.homeDashboardButtonAction}>
              <PlusIcon />
            </button>
          </div>
        </div>
        <div className={styles.filtersContainer}>
          <FilterStatus {...filterValue} />
          <LayoutFilter {...layoutWay} />
        </div>
        <div
          className={clsx(
            layoutWay[0] == "Grid" ? styles.CardsLayout : styles.CardsContainer,
          )}
        >
          <Suspense fallback={<FallBack />}>
            <Card
              value={filterValue[0]}
              search={search}
              layout={layoutWay[0]}
            />
          </Suspense>
        </div>
        <div className={styles.footerContainer}>Footer</div>
      </div>
    </div>
  );
}

const FallBack = () => {
  return <p className={styles.loadingText}>loading...</p>;
};
