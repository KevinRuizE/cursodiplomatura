const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="images/impresion-digital.jpg" alt="Impresion digital" width="910" height="305"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus earum nam architecto porro distinctio
                    voluptates quis repellat repudiandae obcaecati, exercitationem laborum, non cupiditate, repellendus
                    eveniet molestiae tempore deleniti debitis id.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus earum nam architecto porro distinctio
                    voluptates quis repellat repudiandae obcaecati, exercitationem laborum, non cupiditate, repellendus
                    eveniet molestiae tempore deleniti debitis id.</p>
            </div>
            <div className="testimonios right">
                <h2>Testimonios</h2>
                   <div className="testimonio">
                   <span className="cita">Simplemente Excelente</span>
                   <span className="autor">Carlos Rivero - memes.com</span>
                </div>
            </div>
        </div>
    </main>
    );
}

export default HomePage;