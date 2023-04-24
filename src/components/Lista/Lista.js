import "./Lista.css";
import ItemLista from "./ItemLista";
import { useEffect, useState } from "react";

const Lista = (props) => {
  const [ingredientes, setIngredientes] = useState([]);
  const [semGlutem, setSemGlutem] = useState(false);
  const [semLactose, setSemLactose] = useState(false);
  const [selectedIngredientes, setSelectedIngredientes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("ingredientes")
      ? JSON.parse(localStorage.getItem("ingredientes"))
      : [];
    setIngredientes(data);
    setSelectedIngredientes(data);
  }, []);

  const handleFiltroGlu = () => {
    const selected = ingredientes.filter(
      (ingredientes) => ingredientes.semGlutem === semGlutem
    );
    setSelectedIngredientes(selected);
  };

  const handleFiltroLac = () => {
    const selected = ingredientes.filter(
      (ingredientes) => ingredientes.semLactose === semLactose
    );
    setSelectedIngredientes(selected);
  };

  const limpaFiltroGLu = () => {
    setSemGlutem(false);
    setSelectedIngredientes(ingredientes);
  };

  const limpaFiltroLac = () => {
    setSemLactose(false);
    setSelectedIngredientes(ingredientes);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <b>Filtro</b> <br />
        <label>
          Sem Glúten
          <input
            type="checkbox"
            name="semGlutem"
            onChange={(event) => setSemGlutem(!semGlutem)}
            checked={semGlutem}
          />
        </label>
        <label>
          Sem Lactose
          <input
            type="checkbox"
            name="semLactose"
            onChange={(event) => setSemLactose(!semLactose)}
            checked={semLactose}
          />
        </label>
        <br />
        <button onClick={handleFiltroGlu}>Filtrar</button>
        <button onClick={limpaFiltroGLu}>Limpar</button>
        <button onClick={handleFiltroLac}>Filtrar</button>
        <button onClick={limpaFiltroLac}>Limpar</button>
      </form>
      {selectedIngredientes &&
        selectedIngredientes.map((ingrediente) => (
          <ItemLista
            ingrediente={ingrediente}
            ingredientes={ingredientes}
            key={ingrediente.nome}
            updateAberto={props.updateAberto}
            updateShowLista={props.updateShowLista}
          />
        ))}
    </div>
  );
};

export default Lista;