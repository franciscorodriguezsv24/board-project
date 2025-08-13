import { Sidebar } from '../../components/sidebar'
import styles from './home.module.scss'
import { SidebarMock } from '../../mock/sidebar'

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <Sidebar nav={SidebarMock}/>
        <div>

        </div>
    </div>
  )
}
