import { useState } from "react";

export default function Form({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handlePhoto(e) {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setForm({ ...form, photo: url });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", phone: "", photo: null });
  }

  return (
    <section className="tutor-form">
      <h2>Cadastrar Tutor</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Telefone" value={form.phone} onChange={handleChange} />
        <input type="file" accept="image/*" onChange={handlePhoto} />
        <button type="submit">Adicionar Tutor</button>
      </form>
    </section>
  );
}
