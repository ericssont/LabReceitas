import "./Lista.css";
import ItemLista from "./ItemLista";
import { useEffect, useState } from "react";

const Lista = (props) => {
  const [receitas, setReceitas] = useState([]);
  const [semGlutem, setSemGlutem] = useState(false);
  const [semLactose, setSemLactose] = useState(false);
  const [selectedReceitas, setSelectedReceitas] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("receitas")
      ? JSON.parse(localStorage.getItem("receitas"))
      : [];
    setReceitas(data);
    setSelectedReceitas(data);
  }, []);

  // ******* Filtro de itens ****************

  const handleFiltroGlu = () => {
    const selected = receitas.filter(
      (receita) => receita.semGlutem === semGlutem
    );
    setSelectedReceitas(selected);
  };

  const handleFiltroLac = () => {
    const selected = receitas.filter(
      (receita) => receita.semLactose === semLactose
    );
    setSelectedReceitas(selected);
  };

  //   ****** Limpeza de itens ***************

  const limpaFiltroGLu = () => {
    setSemGlutem(false);
    setSelectedReceitas(receitas);
  };

  const limpaFiltroLac = () => {
    setSemLactose(false);
    setSelectedReceitas(receitas);
  };

  /* botões filtros */

  return (
    <div>
      <div className="filtro">
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
        <br />
        </label>
        <button className="btn" onClick={handleFiltroGlu}>Filtrar</button>
        <button className="btn" onClick={limpaFiltroGLu}>Limpar</button>
        <br />
        <label>
          Sem derivados de leite
          <input
            type="checkbox"
            name="semLactose"
            onChange={(event) => setSemLactose(!semLactose)}
            checked={semLactose}
          />
          <br />
        </label>
        <button className="btn" onClick={handleFiltroLac}>Filtrar</button>
        <button className="btn" onClick={limpaFiltroLac}>Limpar</button>
        <br />
      </form>
      </div>
      <br />

      {selectedReceitas &&
        selectedReceitas.map((receita) => (
          <ItemLista
            receita={receita}
            receitas={receitas}
            key={receita.nome}
            updateAberto={props.updateAberto}
            updateShowLista={props.updateShowLista}
          />
        ))}
    </div>
  );
};

export default Lista;
