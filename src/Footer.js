const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p className="footerP">&copy; { currentYear } <span>| </span><span>MAHER SALEH</span> </p>
        </footer>
    );
}
 
export default Footer;