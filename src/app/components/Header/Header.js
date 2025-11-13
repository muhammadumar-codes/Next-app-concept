import Link from 'next/link'
import Button from '../Button/Button'
import styles from './Header.module.css'

// ======= Header Component ==========
export default function Header() {
  return (
    <header className={styles.header}>
      {/* Left: Logo + Navigation */}
      <div className={styles.logoLinkContainer}>
        <div className={styles.logo}>Muhammad Umar</div>

        <nav className={styles.navLinks}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/clock">Clock</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Right: Search + Cart + Logout */}
      <div className={styles.rightSection}>
        <form className={styles.searchBox}>
          <input type="text" placeholder="Search..." />
        </form>

        <Button className={styles.buttonLogout}>Log out</Button>
      </div>
    </header>
  )
}
