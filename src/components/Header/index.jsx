import styles from "./index.module.css";

export default function Header(){
 return(
  <header>
   <nav className={styles.header}>
    <li className={styles.link}><a href="#">About Me</a></li>
    <li className={styles.link}><a href="#">Projects</a></li>
    <li className={styles.link}><a href="#">Contact Me</a></li>
   </nav>
  </header>
 )
}