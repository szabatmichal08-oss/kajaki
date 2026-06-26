const Contact = () => {
    
    return ( 
        <div className="contact">
            <h2 className="pageTitle">Kontakt</h2>
            <div className="contact__wrapper">
                <div className="contact__info">
                    <a className="contact__infoItem" href="tel:+48 668 433 047">Tel: +48 668 433 047</a>
                    <a href="mailto:tomasz.szabat@gmail.com?subject=Stona internetowa" className="contact__infoItem">e-mail: tomasz.szabat@gmail.com</a>
                    <p className="contact__infoItem">ul. Spokojna 58, 37-413 Harasiuki</p>
                </div>
                <iframe title="google maps" className="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.0728397834587!2d22.462383715732372!3d50.47698767947904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ccdd0dce768f5%3A0xd75ce49b8a539b7d!2sUlica%20spokojna%2058%2C%2037-413%20Harasiuki!5e0!3m2!1spl!2spl!4v1626348367391!5m2!1spl!2spl" loading="lazy"></iframe>
            </div>
        </div>
     );
}
 
export default Contact;

