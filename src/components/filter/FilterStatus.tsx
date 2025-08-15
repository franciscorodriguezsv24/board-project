
import { useState } from 'react';
import styles from './filter.module.scss'
import { ListFilter } from 'lucide-react';

export const FilterStatus = ({ setValue, value }: { setValue: React.Dispatch<React.SetStateAction<string>>, value: string }) => {

    const [isFilter, setIsFilter] = useState(false)


  return (
    <div className={styles.filterSelectContainer}>
        <button className={styles.filterCategory} onClick={(e) => {e.preventDefault(); setIsFilter(!isFilter)}}>
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
  )
}
