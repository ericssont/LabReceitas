import Form from "../Form/Form";
import "../../index.css";
import buttonImage from "../../assets/adicionar.png";

const Popup = (props) => {
  const { aberto } = props;
  return (
    <div className="area-inicial">
      {!aberto && (
        <img
          src={buttonImage}
          alt="Botão adicionar Receita."
          title="Clique para adicionar uma nova receita."
          width={50}
          onClick={() => {
            props.updateAberto(true);
            props.updateShowLista(false);
          }}
          style={{
            cursor: "pointer",
          }}
        />
      )}
      {aberto && (
        <Form
          receitas={props.receitas}
          updateAberto={props.updateAberto}
          updateReceitas={props.updateReceitas}
          updateShowLista={props.updateShowLista}
        />
      )}
    </div>
  );
};

export default Popup;
