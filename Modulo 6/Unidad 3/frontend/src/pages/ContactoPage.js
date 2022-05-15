import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <section className="holder">
        <div className="columna left">
            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>
            </div>
            <div className="columna right">
            <h2>Otras vias de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Teléfono:</li>
                <li>Email: Ilacontact@hotmail.com.ar</li>
                <li>Facebook: Ilac S.A </li>
                <li>Twitter: Ilac</li>
                <li>Skype: Ilacontact</li>
            </ul>
          </div>
        
    </section>
    );
}

export default ContactoPage;