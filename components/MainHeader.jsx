import Link from "next/link";
import Image from "next/image";
import LogoImg from '@/assets/logo.png'
import styles from '@/components/Header/MainHeader.module.css'

const MainHeader = () => {
  return ( 
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={LogoImg} alt="food logo" priority />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
   );
}
 
export default MainHeader;