import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/payout_logo.png";

export default function Navbar() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Payout" />
        </Link>
        <ul class={styles.list}>
          <li class={styles.item}>
            <Link to="/Projects">Projetos</Link>
          </li>
          <li class={styles.item}>
            <Link to="/Company">Empresa</Link>
          </li>
          <li class={styles.item}>
            <Link to="/Contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
