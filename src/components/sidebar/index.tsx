import styles from './sidebar.module.scss'
import { Link, useLocation } from 'react-router';
import type { SidebarType } from '../../mock/sidebar';

export const Sidebar = ({ nav }: { nav: SidebarType[] }) => {
    const location = useLocation();
    const currentPath = location.pathname

  return (
    <div className={styles.sidebarContainer}>
        <div className={styles.sidebarTitleContainer}>
            <img src='/icons/clock.svg' alt='clock'/>
            <p>Resource Planning</p>
        </div>
        <div className={styles.navContainer}>
        {
          nav.map((item, index) => {
            return (
                <Link to={item.link ? item.link : "#"} className={` ${currentPath === item.link ? styles.selectedLinkTo : styles.linkTo } `} key={index}>
                    <img src={item.icon} alt={item.label || "Navigation icon"} />
                    {item.label ? item.label: "hopping"}
                </Link>
            )
          })
        }
      </div>
    </div>
  )
}

