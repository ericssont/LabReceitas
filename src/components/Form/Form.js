import { useEffect, useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [form, setForm] = useState({});
  const [receitas, setReceitas] = useState([]);
  const [selectedReceita, setSelectedReceita] = useState();
  const [ingredientes, setIngrediente] = useState([]);

  useEffect(() => {
    const receita = JSON.parse(localStorage.getItem("selectedReceita"));
    if (receita) {
      setSelectedReceita(receita);
      setForm(receita);
    }

    const lista = JSON.parse(localStorage.getItem("receitas"));
    if (lista) {
      setReceitas(lista);
    }
  }, []);

  const handleChange = (event) => {
    setForm({
      ...form,
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

  // ********* Função de gravar as alter dos forms, inclusao e edição dos itens da lista **********

  const handleSubmit = (event) => {
    event.preventDefault();
    let array = [];

    const formData = form;

    if (!("semLactose" in form)) {
      formData.semLactose = false;
    }
    console.log(selectedReceita);

    if (!("semGlutem" in form)) {
      formData.semGlutem = false;
    }
    console.log(selectedReceita);

    if (selectedReceita) {
      const updatedReceitas = props.receitas.map((receita) => {
        if (JSON.stringify(receita) === JSON.stringify(selectedReceita)) {
          console.log(formData);
          return formData;
        } else {
          return receita;
        }
      });
      array = updatedReceitas;
    } else {
      array = [...props.receitas, formData];
      console.log(...props.receitas);
    }
    localStorage.removeItem("selectedReceita");
    localStorage.setItem("receitas", JSON.stringify(array));
    props.updateReceitas(array);
    props.updateShowLista(true);
    props.updateAberto(false);
  };

  //Exclusão de itens da lista

  const removeReceita = (selectedReceita) => {
    const receitaIndex = receitas.findIndex(
      (receita) => JSON.stringify(receita) === JSON.stringify(selectedReceita)
    );
    receitas.splice(receitaIndex, 1);
    console.log(receitas);
    localStorage.setItem("receitas", JSON.stringify(receitas));
    props.updateReceitas(receitas);
    props.updateAberto(false);
    props.updateShowLista(true);
    localStorage.removeItem("selectedReceita");
  };

  return (
    <form className="btn-form" onSubmit={(event) => handleSubmit(event)}>
      <div className="btn-form">
        <label>
          Receita: <br />
          <input
            type="text"
            name="receita"
            onChange={(event) => handleChange(event)}
            value={form.receita}
            required
          />
        </label>
      </div>
      <div className="btn-form">
        <label>
          Ingredientes: <br />
          <div>
            <textarea
              name="ingredientes"
              value={form.ingredientes}
              onChange={(event) => handleChange(event)}
              required
            />
            <ul>{ingredientes}</ul>
          </div>
        </label>
      </div>
      <div className="btn-form">
        <label>
          Modo de preparo: <br />
          <textarea
            type="text"
            name="preparo"
            onChange={(event) => handleChange(event)}
            value={form.preparo}
            required
          />
        </label>
      </div>

      <div className="btn-form">
        <h3>Restrições:</h3>
        <label>
          Sem Glúten
          <input
            type="checkbox"
            name="semGlutem"
            onChange={(event) => handleSemGlutem(event)}
            checked={form.semGlutem}
          />
        </label>

        <div className="btn-form">
          <label>
            Sem derivados de leite
            <input
              type="checkbox"
              name="semLactose"
              onChange={(event) => handleSemLactose(event)}
              checked={form.semLactose}
            />
          </label>
        </div>
      </div>

      <button type="submit" className="btn">
        {selectedReceita ? "Alterar" : "Adicionar"}
      </button>
      {selectedReceita ? (
        <button
          onClick={(event) => {
            event.preventDefault();
            removeReceita(selectedReceita);
          }}
          className="btn"
        >
          Excluir
        </button>
      ) : (
        <></>
      )}
    </form>
  );
};
export default Form;
