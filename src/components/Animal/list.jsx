import Card from "./card";

export default function List({ animais, onDelete, onEdit }) {
  return (
    <div className="animais-list">
      <h2>Animais Cadastrados</h2>

      {animais.length === 0 && <p>Nenhum animal cadastrado.</p>}

      {animais.map((a) => (
        <Card
          key={a.id}
          animal={a}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
