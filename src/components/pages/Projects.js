import { useLocation } from "react-router-dom";
import Message from "../layout/Message";

export default function Projects() {
  const navigate = useLocation();
  let message = "";
  if (navigate.state) message = navigate.state.message;
  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && <Message msg={message} type="success" />}
    </div>
  );
}
