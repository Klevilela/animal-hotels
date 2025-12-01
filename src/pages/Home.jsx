import CardHome from "../components/UI/CardHome";

function Home() {
    const info_secao = [
        {route:"/tutores", img_path:"public/images/tutor_pet.jpg", nome_secao:"Tutor"},
        {route:"/animais", img_path:"public/images/pets.jpg", nome_secao:"Pet"}
    ];

    return (
        <div 
            className="min-vh-100 d-flex flex-column justify-content-between"
            style={{
                background: "linear-gradient(180deg, #f8f9fa, #e9ecef)"
            }}
        >

            
            <header className="text-center mt-4">
                <h1 className="fw-bold">Sistema Animals Hotels</h1>
                <p className="text-muted fs-5">
                    Gerencie tutores e animais com praticidade
                </p>
            </header>

           
            <div className="container d-flex justify-content-center align-items-center flex-grow-1">
                <div className="row g-4" style={{ maxWidth: "700px" }}>
                    {info_secao.map((info, index) => (
                        <div key={index} className="col-6">
                            <CardHome 
                                route={info.route}
                                img_path={info.img_path}
                                nome_secao={info.nome_secao} 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-3 text-muted">
                © 2025 – Animals Hotels. Todos os direitos reservados.
            </footer>

        </div>
    );
}

export default Home;
