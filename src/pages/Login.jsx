import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function logar(email, senha) {
    // Login fake: só verifica se não são strings vazias
    if (email.trim() !== "" && senha.trim() !== "") {
        return true;
    }
    return false;
}

function Login() {
    const [formCredentials, setFormCredentials] = useState({
        email: "",
        senha: ""
    });

    function handleChange(e) {
        setFormCredentials({
            ...formCredentials,
            [e.target.id]: e.target.value
        });
    }

    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        const { email, senha } = formCredentials;

        console.log("Email:", email);
        console.log("Senha:", senha);

        if (logar(email, senha)) {
            navigate('/home', { replace: true });
        } else {
            alert('Email ou senha inválidos ou não informados');
        }
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
                                value={formCredentials.email}
                                onChange={handleChange}
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
                                value={formCredentials.senha}
                                onChange={handleChange}
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
