import { useAuth } from '@/hooks/auth';
import { useRouter } from "next/router";
import { useState } from 'react';
import { VscSignOut } from 'react-icons/vsc';
import carLogo from '../../assets/car-logo.png';
import styles from './styles.module.scss';

interface NavbarTabProps {
  name: string;
  path: string;
  isActive: boolean;
  onClickTab: () => void;
}

function NavbarTab({ name, path, isActive, onClickTab }: NavbarTabProps) {
  const router = useRouter()

  function handleClickTab() {
    onClickTab()
    router.push(path)
  }

  return (
    <button
      className={isActive ? styles.navbarTabActive : styles.navbarTab}
      onClick={() => handleClickTab()}
    >
      {name}
    </button>
  )
}

export function Header() {
  const [activeTab, setActiveTab] = useState<string>('/home');
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  const tabs = [
    { name: 'Início', path: '/home' },
    { name: 'Favoritos', path: '/favorites' },
  ]

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <img className={styles.logo} src={carLogo.src} alt="logo" />
          <div className={styles.navbarContainer}>
            {tabs.map((tab, index) => (
              <NavbarTab
                key={index}
                name={tab.name}
                path={tab.path}
                isActive={tab.path === activeTab}
                onClickTab={() => setActiveTab(tab.path)}
              />
            ))}
          </div>
        </div>
        <button className={styles.signOutButton} onClick={handleSignOut} >
          <VscSignOut />
        </button>
      </div>
    </header>
  )
}
