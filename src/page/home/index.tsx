import { Sidebar } from '../../components/sidebar'
import { SearchIcon, PlusIcon} from 'lucide-react'
import styles from './home.module.scss'
import { SidebarMock } from '../../mock/sidebar'
import { Suspense,  } from 'react'
import { Card } from '../../components/card'
import { FilterStatus } from '../../components/filter/FilterStatus'
import { LayoutFilter } from '../../components/displayLayout/LayoutFilter'

export function Home() {

  return (
    <div className={styles.homeContainer}>
        <Sidebar nav={SidebarMock}/>
        <div className={styles.homeDashboardContainer}>
          <div className={styles.homeDashboardHead}>
            <h2>Clients</h2>
            <div className={styles.homeDashboardActions}>
              <div className={styles.homeDashboardActionsInputs}>
                <input className={styles.homeDashboardInput}></input>
                <SearchIcon className={styles.buttonSearchIcon} size={16}/>
              </div>
              <button className={styles.homeDashboardButtonAction}>
                <PlusIcon/>
              </button>
            </div>
          </div>
          <div className={styles.filtersContainer}>
            <FilterStatus/>
            <LayoutFilter/>
          </div>
          <div className={styles.test}>
            <Suspense fallback={<FallBack/>}>
              <Card/>
            </Suspense>
          </div>
        </div>
    </div>
  )
}

const FallBack = () => {
  return <p className={styles.loadingText}>loading...</p>
}