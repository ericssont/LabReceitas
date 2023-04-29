import { useEffect, useState } from "react";
import Popup from "./components/Popup/Popup";
import Lista from "./components/Lista/Lista";

function App() {
  const [receitas, setReceitas] = useState([]);
  const [showLista, setShowLista] = useState(true);
  const [aberto, setAberto] = useState(false);

  const updateReceitas = (value) => {
    setReceitas(value);
  };
  const updateShowLista = (value) => {
    setShowLista(value);
  };
  const updateAberto = (valor) => {
    setAberto(valor);
  };

  useEffect(() => {
    const data = localStorage.getItem("receitas")
      ? JSON.parse(localStorage.getItem("receitas"))
      : [];
    setReceitas(data);
  }, []);

  return (
    <div className="areaTotal">
      <div>
        <Popup
          updateAberto={updateAberto}
          aberto={aberto}
          updateReceitas={updateReceitas}
          receitas={receitas}
          updateShowLista={updateShowLista}
        />
        {showLista && (
          <Lista
            receitas={receitas}
            updateAberto={updateAberto}
            updateShowLista={updateShowLista}
            updateReceitas={updateReceitas}
          />
        )}
      </div>
    </div>
  );
}

export default App;
