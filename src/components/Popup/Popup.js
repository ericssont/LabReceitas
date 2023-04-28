import Form from "../Form/Form";

const Popup = (props) => {
  const { aberto } = props;
  return (
    <div className="area-inicial">
    <h1>Caderno de Receitas</h1>
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
