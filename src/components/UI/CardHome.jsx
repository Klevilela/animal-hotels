function CardHome({ route, img_path, nome_secao }) {
    return (
        <a href={route} className="text-decoration-none">
            <div 
                className="card shadow-sm"
                style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    height: "280px",
                    cursor: "pointer"
                }}
            >
                <div style={{ height: "60%" }}>
                    <img 
                        src={img_path} 
                        alt="" 
                        className="w-100 h-100" 
                        style={{ objectFit: "cover" }} 
                    />
                </div>
                <div className="card-body text-center">
                    <h4 className="card-title m-0">
                        Seção do {nome_secao}
                    </h4>
                </div>
            </div>
        </a>
    );
}

export default CardHome;
