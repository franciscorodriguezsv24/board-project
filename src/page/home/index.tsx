import { Sidebar } from '../../components/sidebar'
import { SearchIcon, PlusIcon, Settings2, ListFilter, Rows3, Grid2X2} from 'lucide-react'
import styles from './home.module.scss'
import { SidebarMock } from '../../mock/sidebar'
import { useState } from 'react'
import { Card } from '../../components/card'

export const Home = () => {

  const [value, setValue] = useState('')
  const [viewType, setViewType] = useState('')
  const [isFilter, setIsFilter] = useState(false)
  const [view, setView] = useState(false)

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
            <div className={styles.filterSelectContainer}>
              <button className={styles.filterCategory} onClick={() => setIsFilter(!isFilter)}>
                <ListFilter/>
                {
                  value || 'filter'
                }
              </button>
              <div className={ isFilter ? styles.valueFilterBlock : styles.valuesFilterhidden}>
                <button onClick={() => {setValue('Active'); setIsFilter(!isFilter)}}>Active</button>
                <button onClick={() => {setValue('Prospective'); setIsFilter(!isFilter)}}>Prospective</button>
                <button onClick={() => {setValue('Archived'); setIsFilter(!isFilter)}}>Archived</button>
              </div>
            </div>

            <div className={styles.valueDisplayCardContainer}>
              <button className={styles.filterDisplayView} onClick={() => setView(!view)}>     <Settings2/>
                  {
                    viewType || 'Display'
                  }
              </button>
              <div className={view ? styles.valueDisplayCardBlock : styles.valueDisplayCardHidden}>
                <button onClick={() => {setViewType('Row'); setIsFilter(!isFilter)}}><Rows3/>Row</button>
                <button onClick={() => {setViewType('Grid'); setIsFilter(!isFilter)}}><Grid2X2/>Grid</button>
              </div>
            </div>
          </div>
          <div className={styles.cardsContianer}>
            <Card/>
          </div>
        </div>
    </div>
  )
}
