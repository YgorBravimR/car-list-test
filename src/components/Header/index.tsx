import styles from './styles.module.scss';
import carLogo from '../../assets/car-logo.png';
import { VscSignOut } from 'react-icons/vsc';
import { useRouter } from "next/router";
import { useAuth } from '@/hooks/auth';

interface NavbarTabProps {
  name: string;
  path: string;
}

function NavbarTab({ name, path }: NavbarTabProps) {
  const router = useRouter()

  return (
    <button
      className={styles.navbarTabContent}
      onClick={() => router.push(path)}
    >
      {name}
    </button>
  )
}

export function Header() {

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
      <div className={styles.leftSection}>
        <img className={styles.logo} src={carLogo.src} alt="logo" />
        <div className={styles.navbarContainer}>
          {tabs.map((tab, index) => (
            <NavbarTab key={index} name={tab.name} path={tab.path} />
          ))}
        </div>
      </div>
      <button className={styles.signOutButton} onClick={handleSignOut} >
        <VscSignOut />
      </button>

    </header>
  )
}
