import { useState } from 'react'
import styles from './layoutDisplay.module.scss'
import { Grid2X2, Rows3, Settings2 } from 'lucide-react'
export const LayoutFilter = () => {
    const [viewType, setViewType] = useState('')
    const [view, setView] = useState(false)


  return (
    <div className={styles.valueDisplayCardContainer}>
        <button className={styles.filterDisplayView} onClick={() => setView(!view)}>     <Settings2/>
            {
            viewType || 'Display'
            }
        </button>
        <div className={view ? styles.valueDisplayCardBlock : styles.valueDisplayCardHidden}>
        <button onClick={() => {setViewType('Row'); setView(!view)}}><Rows3/>Row</button>
        <button onClick={() => {setViewType('Grid'); setView(!view)}}><Grid2X2/>Grid</button>
        </div>
    </div>
  )
}
