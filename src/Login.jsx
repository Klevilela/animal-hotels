import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Senha:", senha);

        // Exemplo de navegação
        // navigate("/dashboard");
    }

    return (
        <>
            <h1 className="text-center">Animals Hotels</h1>
            <div 
                className="d-flex justify-content-center align-items-center bg-light"
                style={{ minHeight: "100vh" }}
            >
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
                    
                    <h2 className="text-center mb-4">Login</h2>

                    <form onSubmit={onSubmit}>
                        
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label fw-semibold">
                                Senha
                            </label>
                            <input
                                type="password"
                                id="senha"
                                className="form-control"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mt-2">
                            Entrar
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <Link 
                            to="/registro"
                            className="text-decoration-none fw-semibold"
                        >
                            Não é cadastrado? Registre-se
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;
