import "./Lista.css";

const ItemLista = (props) => {
  const { receita } = props;

  const selectReceita = (receita) => {
    localStorage.setItem("selectedReceita", JSON.stringify(receita));
  };

  const handleForm = () => {
    props.updateAberto(true);
    props.updateShowLista(false);
  };

  return (
   
      <div className="receita">
        <b>Receita:</b>
        <div>{receita.receita}</div>
        <div>
          <button
            onClick={() => {
              selectReceita(receita);
              handleForm();
            }}
          >
            Editar
          </button>
        </div>
      </div>
    
  );
};

export default ItemLista;
