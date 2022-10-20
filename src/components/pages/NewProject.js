import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

export default function NewProject() {
  return (
    <div className={styles.NP_container}>
      <h1>Criar Projetos</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  );
}
