import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Developed by MathTech Maestros</p>
        <p>Copyright Ⓒ {currentYear}</p>
        </footer>
}
export default Footer;