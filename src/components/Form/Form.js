import { useEffect, useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [form, setForm] = useState({
    receita: "",
    ingredientes: "",
    preparo: "",
  });
  const [receitas, setReceitas] = useState([]);
  const [selectedReceita, setSelectedReceita] = useState();

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

  //  Cancelar ação na edição e retornar ao popup anterior

  const handleCancel = () => {
    props.updateAberto(false);
    props.updateShowLista(true);
    localStorage.removeItem("selectedReceita");
  };

  // Para fazer a listagem não ordenada abaixo do textarea de ingredientes

  const ingredientesList = form.ingredientes
    .split(",")
    .map((ingrediente, index) => <li key={index}>{ingrediente.trim()}</li>);

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label>
          <b>Receita: </b>
          <br />
          <input
            type="text"
            name="receita"
            onChange={(event) => handleChange(event)}
            value={form.receita}
            required
            placeholder="Nome da sua receita."
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          <br />
          <b>Ingredientes: </b>
          <br />
          <div>
            <textarea
              name="ingredientes"
              value={form.ingredientes.replace(/-/g, "\n")}
              onChange={(event) => handleChange(event)}
              required
              placeholder="Ingredientes separados por vígula."
            />

            {/* // Não consegui e pelo que encontrei, não teria como colocar 
            // uma lista nao ordenada dentro do textarea. Logo, deixei assim 
            // para fazer uma lista abaixo da textarea. Ficou estranho, eu sei! */}

            <ul className="ingredientes">{ingredientesList}</ul>
          </div>
        </label>
      </div>
      <div>
        {" "}
        <br />
        <label>
          <b>Modo de preparo: </b>
          <br />
          <textarea
            type="text"
            name="preparo"
            onChange={(event) => handleChange(event)}
            value={form.preparo}
            required
            placeholder="Digite aqui os seus segredos culinários."
          />
        </label>
      </div>
      <br />
      <div>
        <b>Restrições:</b>
        <br />
        <label>
          Sem Glúten
          <input
            type="checkbox"
            name="semGlutem"
            onChange={(event) => handleSemGlutem(event)}
            checked={form.semGlutem}
          />
        </label>

        <div>
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

      <button style={{ cursor: "pointer" }} type="submit" className="btn">
        {selectedReceita ? "Salvar" : "Adicionar"}
      </button>
      {selectedReceita ? (
        <button
          style={{ cursor: "pointer" }}
          onClick={(event) => {
            event.preventDefault();
            if (
              window.confirm("Tem certeza que deseja excluir esta receita?")
            ) {
              removeReceita(selectedReceita);
            }
          }}
          className="btn"
        >
          Excluir
        </button>
      ) : (
        <></>
      )}
      <button
        style={{ cursor: "pointer" }}
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
