import styles from './card.module.scss'
import img from '../../assets/Avatar.svg'
import type { DataBoard } from '../../mock/data'
import { use } from 'react'
import { getComapnies } from '../../api/GetCompany'

export function Card() {
  const data = use(getComapnies()) as DataBoard[]

  console.log("este es data", data)
  return (
    <>
      {
        data.map((board: DataBoard) => {
          return (
                <div className={styles.cardContainer} key={board.id}>
                  <div className={styles.CardImgContainer}>
                    <img src={img} alt='logo' className={styles.cardImg}/>
                  </div>
                  <div className={styles.cardTextContainer}>
                    <h4>{board.company}</h4>
                    <p>{board.projects} projects</p>
                  </div>
                  <div className={styles.statusContainer}>
                    <p className={styles.statusTextActive}>{board.status}</p>
                  </div>
                </div>
          )
              
        })
      }
    </>
  )
}

