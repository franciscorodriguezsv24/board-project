import { ChartLine, PanelsTopLeft, UserRoundCheck, ClipboardList, Users, BookKey, SquareStack, Timer, PanelLeftOpen } from "lucide-react";
import styles from './sidebar.module.scss'
import { Link, useLocation } from 'react-router';
import type { SidebarType } from '../../mock/sidebar';
import profile from '../../assets/profile.jpg'

const IconElement = (iconName: string, className: string) => {

  const icons = {
    timeline: <ChartLine className={className} size={20} />,
    clients: <UserRoundCheck className={className} size={20}/>,
    dashboard: <PanelsTopLeft className={className} size={20}/>,
    groups: <SquareStack className={className} size={20}/>,
    projects: <ClipboardList className={className} size={20}/>,
    team: <BookKey className={className} size={20}/>,
    teamMember: <Users className={className} size={20}/>
  }

  return icons[iconName as keyof typeof icons] || null;
}

export const Sidebar = ({ nav }: { nav: SidebarType[] }) => {
    const location = useLocation();
    const currentPath = location.pathname

  return (
    <div className={styles.sidebarContainer}>
      <div>
        <div className={styles.sidebarTitleContainer}>
          <div className={styles.sidebarTitle}>
              <Timer size={20}/>
              <p className={styles.sidebarTitleP}>Resource Planning</p>
          </div>
          <button className={styles.titleButton}>
            <PanelLeftOpen size={18}/>
          </button>
        </div>
        <div className={styles.navContainer}>
        {
          nav.map((item) => {
            return (
                <Link to={item.link ? item.link : "#"} className={` ${currentPath === item.link ? styles.selectedLinkTo : styles.linkTo } `} key={item.label}>
                    {IconElement(item.iconName, styles.iconClass)}
                    {item.label ? item.label: "hopping"}
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className={styles.sidebarFooter}>
        <img src={profile} alt="user" className={styles.imgSidebar}/>
        <p className={styles.sidebarP}>Alejandro Rodriguez</p>
      </div>
    </div>

  )
}

