import Link from "next/link";
// import Image from "next/image";z`
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
      
        {/* About Section */}
        <div className={styles.footerAbout}>
          <h3>About Digital Clock</h3>
          <p>
            Our watch app helps you manage time smarter — track, organize, and
            optimize every second of your life with ease.
          </p>
        </div>

        {/* Links */}
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <p>Email: muhammadumar.codes@gmail.com</p>
          <p>Phone: +92 3010568885</p>
          <p>Address: Peshawar, Pakistan</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <p>© 2025 GHARYAL.com — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
