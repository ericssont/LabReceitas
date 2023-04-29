import Form from "../Form/Form";
import "../../index.css";
import buttonImage from "../../assets/plus.png"


const Popup = (props) => {
  const { aberto } = props;
  return (
    <div className="area-inicial">
   
      {!aberto && (
        <img
        src={buttonImage}
        alt="Botão" width={50}
        onClick={() => {
              props.updateAberto(true);
              props.updateShowLista(false);
            }}
        style={{
          cursor: 'pointer'
        }}
      />
        
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
