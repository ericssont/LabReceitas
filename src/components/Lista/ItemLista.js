const ItemLista = (props) => {
    const {ingrediente} = props;

    const selectIngrediente = (ingrediente) => {
        localStorage.setItem('selectedIngrediente',JSON.stringify(ingrediente));
    };

    const handleForm = () => {
        props.updateAberto(true);
        props.updateShowLista(false);
      };

    return (
        <div className="item-lista">
          <div>{ingrediente.nome}</div>
          <div>
            <button
              onClick={() => {
                selectIngrediente(ingrediente);
                handleForm();
              }}
            >
              Info
            </button>
          </div>
        </div>
      );
    };
    
    export default ItemLista;
