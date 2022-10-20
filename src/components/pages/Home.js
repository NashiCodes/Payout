import styles from "./Home.module.css";
import saving from "../../img/saving.svg";
import LinkButton from "../layout/LinkButton";

export default function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-Vindo ao <span>Payout</span>
      </h1>
      <p>Comece a gerenciar os seus prrojetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Novo Projeto" />
      <img src={saving} alt="Poupança" />
    </section>
  );
}
