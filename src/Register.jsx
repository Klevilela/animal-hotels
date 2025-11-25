import { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {

    const [formData, setFormData] = useState({ nome: "", email: "", senha: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Dados enviados:", formData);
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#f0f2f5", padding: "20px" }}
        >
            
            <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "420px" }}>
                
                <h2 className="text-center mb-4 fw-bold">Cadastro</h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-2">
                        Enviar
                    </button>
                    
                </form>
            </div>
        </div>
    )
}

export default Register