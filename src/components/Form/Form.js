import { useEffect, useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [form, setForm] = useState({});
  const [ingredientes, setIngredientes] = useState([]);
  const [selectedIngrediente, setSelectedIngrediente] = useState();

  useEffect(() => {
    const ingrediente = JSON.parse(localStorage.getItem("selectedIngrediente"));
    if (ingrediente) {
      setSelectedIngrediente(ingrediente);
      setForm(ingrediente);
    }
    const lista = JSON.parse(localStorage.getItem("ingredientes"));
    if (lista) {
      setIngredientes(lista);
    }
  }, []);

  const handleChange = (event) => {
    setForm({
      ...Form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSemLactose = (event) => {
    setForm({
      ...form,
      semLactose: event.target.checked ? true : false,
    });
  };

  const handleSemGlutem = (event) => {
    setForm({
      ...form,
      semGlutem: event.target.checked ? true : false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let array = [];

    const formData = form;

    if (!("semLactose" in form)) {
      formData.semLactose = false;
    }
    console.log(selectedIngrediente);

    if (!("semGlutem" in form)) {
      formData.semGlutem = false;
    }
    console.log(selectedIngrediente);

    if (selectedIngrediente) {
      const updateIngredientes = props.ingredientes.map((ingrediente) => {
        if (
          JSON.stringify(ingrediente) === JSON.stringify(selectedIngrediente)
        ) {
          console.log(formData);
          return formData;
        } else {
          return ingrediente;
        }
      });
      array = updateIngredientes;
    } else {
      array = [...props.ingredientes, formData];
      console.log(...props.ingredientes);
    }
    localStorage.removeItem("selectedIngrediente");
    localStorage.setItem("ingredientes", JSON.stringify(array));
    props.updateIngredientes(array);
    props.updateShowLista(true);
    props.updateAberto(false);
};

  const removeIngrediente = (selectedIngrediente) => {
    const ingredienteIndex = ingredientes.findIndex(
      (ingrediente) => JSON.stringify(ingrediente) === JSON.stringify(selectedIngrediente)
    );
    ingredientes.splice(ingredienteIndex, 1);
    console.log(ingredientes);
    localStorage.setItem("ingredientes", JSON.stringify(ingredientes));
    props.updateIngredientes(ingredientes);
    props.updateAberto(false);
    props.updateShowLista(true);
    localStorage.removeItem("selectedIngrediente");
  };

  const handleCancel = () => {
    props.updateAberto(false);
    props.updateShowLista(true);
    localStorage.removeItem("selectedPet");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="form-row">
        <label>
          Receita: <br />
          <input
            type="text"
            name="receita"
            onChange={(event) => handleChange(event)}
            value={form.nome}
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Ingredientes: <br />
          <input
            type="text"
            name="ingredientes"
            onChange={(event) => handleChange(event)}
            value={form.ingredi}
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Sem Glúten
          <input
            type="checkbox"
            name="semGlutem"
            onChange={(event) => handleSemGlutem(event)}
            checked={form.semGlutem}
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          Sem Lactose
          <input
            type="checkbox"
            name="semLactose"
            onChange={(event) => handleSemLactose(event)}
            checked={form.semLactose}
          />
        </label>
      </div>

      <button type="submit" className="btn">
        {selectedIngrediente ? "Editar" : "Adicionar"}
      </button>
      {selectedIngrediente ? (
        <button
          onClick={(event) => {
            event.preventDefault();
            removeIngrediente(selectedIngrediente);
          }}
          className="btn"
        >
          Excluir
        </button>
      ) : (
        <></>
      )}
      <button
        className="btn"
        onClick={() => {
          handleCancel();
        }}
      >
        Cancelar
      </button>
    </form>
  );
};
export default Form;
