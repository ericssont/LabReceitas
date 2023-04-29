import "./Lista.css";
import ItemLista from "./ItemLista";
import { useEffect, useState } from "react";

function Lista(props) {
  const [receitas, setReceitas] = useState([]);
  const [semGlutem, setSemGlutem] = useState(false);
  const [semLactose, setSemLactose] = useState(false);
  const [selectedReceitas, setSelectedReceitas] = useState([]);

  useEffect(() => {
    const storedReceitas = localStorage.getItem("receitas");
    if (storedReceitas) {
      setReceitas(JSON.parse(storedReceitas));
      setSelectedReceitas(JSON.parse(storedReceitas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("receitas", JSON.stringify(receitas));
  }, [receitas]);

  useEffect(() => {
    const filteredReceitas = receitas.filter((receita) => {
      if (semGlutem && semLactose) {
        return receita.semLactose && receita.semGlutem;
      } else if (semGlutem) {
        return receita.semGlutem;
      } else if (semLactose) {
        return receita.semLactose;
      } else {
        return true;
      }
    });
    setSelectedReceitas(filteredReceitas);
  }, [receitas, semGlutem, semLactose]);

  return (
    <div>
      <div className="filtro">
        <form onSubmit={(e) => e.preventDefault()}>
          <b>Filtrar</b> <br />
          <label>
            Sem Glúten
            <input
              type="checkbox"
              name="semGlutem"
              onChange={(event) => setSemGlutem(event.target.checked)}
              checked={semGlutem}
            />
          </label>
          <br />
          <label>
            Sem derivados de leite
            <input
              type="checkbox"
              name="semLactose"
              onChange={(event) => setSemLactose(event.target.checked)}
              checked={semLactose}
            />
            <br />
          </label>
          <br />
        </form>
      </div>
      <br />

      {selectedReceitas.map((receita) => (
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
}

export default Lista;
