import { useState, useEffect } from "react";

const racas = {
  cachorro: ["Vira-lata", "Labrador", "Poodle", "Bulldog", "Golden"],
  gato: ["Vira-lata", "Siamês", "Persa", "Angorá", "Maine Coon"]
};

export default function Form({ onSubmit, onUpdate, editingAnimal, tutores }) {
  const [form, setForm] = useState({
    id: null,
    nome: "",
    especie: "",
    raca: "",
    idade: "",
    tutorId: "",
    foto: ""
  });

  useEffect(() => {
    if (editingAnimal) setForm(editingAnimal);
  }, [editingAnimal]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "especie" ? { raca: "" } : {})
    }));
  }

  function handleFoto(e) {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, foto: URL.createObjectURL(file) }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editingAnimal) {
      onUpdate(form);
    } else {
      onSubmit(form);
    }

    setForm({
      id: null,
      nome: "",
      especie: "",
      raca: "",
      idade: "",
      tutorId: "",
      foto: ""
    });
  }

  return (
    <form className="animal-form" onSubmit={handleSubmit}>
      <h2>{editingAnimal ? "Editar Animal" : "Cadastrar Animal"}</h2>

      <input
        name="nome"
        placeholder="Nome do animal"
        value={form.nome}
        onChange={handleChange}
        required
      />

      <div className="especie-raca-row">
        <select
          name="especie"
          value={form.especie}
          onChange={handleChange}
          required
        >
          <option value="">Selecione a espécie</option>
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
        </select>

        <select
          name="raca"
          value={form.raca}
          onChange={handleChange}
          disabled={!form.especie}
        >
          <option value="">Selecione a raça</option>

          {(racas[form.especie] || []).map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <input
        name="idade"
        type="number"
        placeholder="Idade"
        value={form.idade}
        onChange={handleChange}
      />

      <select name="tutorId" value={form.tutorId} onChange={handleChange}>
        <option value="">Tutor</option>

        {tutores.map((t) => (
          <option key={t.id} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>

      <input type="file" accept="image/*" onChange={handleFoto} />

      {form.foto && (
        <img src={form.foto} className="animal-photo-preview" alt="preview" />
      )}

      <button>
        {editingAnimal ? "Salvar Alterações" : "Adicionar Animal"}
      </button>
    </form>
  );
}
