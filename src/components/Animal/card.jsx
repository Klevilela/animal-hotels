export default function Card({ animal, onEdit, onDelete }) {
  return (
    <div className="animal-item">
      <div className="animal-item-info">
        {animal.foto && <img src={animal.foto} alt={animal.nome} />}

        <div>
          <strong>{animal.nome}</strong>
          <div style={{ fontSize: 14, opacity: 0.7 }}>
            {animal.especie} • {animal.raca || "Sem raça"} • {animal.idade} anos
          </div>

          <div style={{ fontSize: 12, opacity: 0.8 }}>
            Tutor: {animal.tutorId ? animal.tutorId : "Não informado"}
          </div>
        </div>
      </div>

      <div className="action-btns">
        <button className="edit-btn" onClick={() => onEdit(animal)}>
          Editar
        </button>

        <button className="delete-btn" onClick={() => onDelete(animal.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
}