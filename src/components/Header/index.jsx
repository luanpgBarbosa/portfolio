import styles from "./index.module.css";

export default function Header(){
 return(
  <header className={styles.container}>
   <nav className={styles.header}>
    <li className={styles.link}><a href="#">Sobre Mim</a></li>
    <li className={styles.link}><a href="#">Projetos</a></li>
    <li className={styles.link}><a href="#">Habilidades</a></li>
   </nav>
  </header>
 )
}