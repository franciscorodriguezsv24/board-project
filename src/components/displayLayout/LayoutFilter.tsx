import { useState } from 'react'
import styles from './layoutDisplay.module.scss'
import { Grid2X2, Rows3, Settings2 } from 'lucide-react'

type LayoutWay = {
  layout: string;
  setLayout: React.Dispatch<React.SetStateAction<string>>
}
export const LayoutFilter = ({layout, setLayout}: LayoutWay) => {


    const [view, setView] = useState(false)

  return (
    <div className={styles.valueDisplayCardContainer}>
        <button className={styles.filterDisplayView} onClick={() => setView(!view)}>     <Settings2/>
            {
            layout || 'Display'
            }
        </button>
        <div className={view ? styles.valueDisplayCardBlock : styles.valueDisplayCardHidden}>
        <button onClick={() => {setLayout('Row'); setView(!view)}}><Rows3/>Row</button>
        <button onClick={() => {setLayout('Grid'); setView(!view)}}><Grid2X2/>Grid</button>
        </div>
    </div>
  )
}
