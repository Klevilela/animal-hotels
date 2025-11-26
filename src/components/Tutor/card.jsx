export default function Card({ tutor, onDelete, onEdit }) {
  return (
    <div className="tutor-card">
      <img src={tutor.photo} className="tutor-photo" />

      <div className="tutor-info">
        <p><strong>{tutor.name}</strong></p>
        <p>Email: {tutor.email}</p>
        <p>Telefone: {tutor.phone}</p>
      </div>

      <div className="tutor-actions">
        <button className="edit-btn" onClick={() => onEdit(tutor)}>Editar</button>
        <button className="delete-btn" onClick={() => onDelete(tutor.id)}>Excluir</button>
      </div>
    </div>
  );
}
