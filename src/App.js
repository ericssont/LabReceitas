import { useEffect, useState } from "react";
import Popup from "./components/Popup/Popup";
import Lista from "./components/Lista/Lista";

function App() {
  const [ingredientes, setIngredientes] = useState([]);
  const [showLista, setShowLista] = useState(true);
  const [aberto, setAberto] = useState(false);

  const updateIngredientes = (value) => {
    setIngredientes(value);
  };
  const updateShowLista = (value) => {
    setShowLista(value);
  };
  const updateAberto = (valor) => {
    setAberto(valor);
  };

  useEffect(() => {
    const data = localStorage.getItem("ingredientes")
      ? JSON.parse(localStorage.getItem("ingredientes"))
      : [];
    setIngredientes(data);
  }, []);

  return (
    <div className="App">
      <Popup
        updateAberto={updateAberto}
        aberto={aberto}
        updateIngredientes={updateIngredientes}
        ingredientes={ingredientes}
        updateShowLista={updateShowLista}
      />
      {showLista && (
        <Lista
          ingredientes={ingredientes}
          updateAberto={updateAberto}
          updateShowLista={updateShowLista}
          updateIngredientes={updateIngredientes}
        />
      )}
    </div>
  );
}

export default App;