import Form from "../Form/Form";

const Popup = (props) => {
  const { aberto } = props;
  return (
    <>
      {!aberto && (
        <button
          className="btn"
          onClick={() => {
            props.updateAberto(true);
            props.updateShowLista(false);
          }}
        >
          Adicionar Receitas
        </button>
      )}
      {aberto && (
        <Form
          updateAberto={props.updateAberto}
          updateIngredientes={props.updateIngredientes}
          ingredientes={props.ingredientes}
          updateShowLista={props.updateShowLista}
        />
      )}
    </>
  );
};

export default Popup;
