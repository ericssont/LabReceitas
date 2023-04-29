import Form from "../Form/Form";
import "../../index.css";


const Popup = (props) => {
  const { aberto } = props;
  return (
    <div className="area-inicial">
    <h1>Livro de Receitas Online</h1>
      {!aberto && (
        <button
          className="btn"
          onClick={() => {
            props.updateAberto(true);
            props.updateShowLista(false);
          }}
          >
          Adicionar Receita
        </button>
      )}
      {aberto && (
        <Form
          receitas = {props.receitas}
          updateAberto={props.updateAberto}
          updateReceitas={props.updateReceitas}
          updateShowLista={props.updateShowLista}
        />
      )}
    </div>
  );
};

export default Popup;
