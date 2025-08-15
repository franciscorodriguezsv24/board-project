import styles from './card.module.scss'
import img from '../../assets/Avatar.svg'
import type { DataBoard } from '../../mock/data'
import { use, useMemo } from 'react'
import { getComapnies } from '../../api/GetCompany'

type Filters = {
  readonly value: string;
  readonly search: string;
  readonly layout: string
}

export function Card({value, search, layout}: Filters ) {
  
  const data = use(getComapnies())

  const filteredData = useMemo(() => {
    let result = data;
    
    if (value.trim()) {
      result = result.filter((item) => 
        item.status.toLowerCase().includes(value.toLowerCase())
      );
    }
    
    if (search.trim()) {
      result = result.filter((item) => 
        item.company.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    return result;
  }, [data, value, search]);

  const stateElement = (status: string) => {
    const statusLabel = {
      active: <p className={styles.statusTextActive}>active</p>,
      prospective: <p className={styles.statusTextProspective}>prospective</p>,
      archived: <p className={styles.statusTextArchived}>archived</p>,
    }
    return statusLabel[status as keyof typeof statusLabel] || null;
  }

  return (
    <>
      {filteredData.map((board: DataBoard) => (
        <div className={`${layout === "Grid" ? styles.cardGridContainer : styles.cardContainer} ${
    board.status === "archived" ? styles.archiveCard : styles.normalCard
  }` } key={board.id}>
          <div className={styles.CardImgContainer}>
            <img src={img} alt='logo' className={ board.status !== "archived" ? styles.cardImg : styles.disableImg}/>
          </div>
          <div className={styles.cardTextContainer}>
            <h4>{board.company}</h4>
            <p>{board.projects} projects</p>
          </div>
          <div className={styles.statusContainer}>
            {stateElement(board.status)}
          </div>
        </div>
      ))}
    </>
  )
}
