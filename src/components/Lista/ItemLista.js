import "./Lista.css";
import buttonEdit from "../../assets/informacoes.png";

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
      <div>
        <b>Receita: </b> {receita.receita}{" "}
        <img
          title="Clique para editar sua receita."
          src={buttonEdit}
          alt="Botão"
          width={20}
          onClick={() => {
            selectReceita(receita);
            handleForm();
          }}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default ItemLista;
