import { Link } from "react-router-dom"

import imagesFooter from "../../assets/footer/imgFooter.js"

import "./footer.css"

const Footer = () => {
    return (
        <footer>

            <div className="footer1">

                <div className="localBelgrano">
                    <h3>Local Belgrano</h3>
                    <p>Av. Monroe 1655 <br /> 4587-5248</p>
                </div>

                <div className="localPalermo">
                    <h3>Local Palermo</h3>
                    <p>Jerónimo Salguero 3212 <br /> 4865-1547</p>
                </div>

                <div className="localRecoleta">
                    <h3>Local Recoleta</h3>
                    <p>Av. Pueyrredón 1650 <br /> 4852-5751</p>
                </div>

                <div className="redes">
                    <h3>Seguinos</h3>
                    <Link target="_blank" to="https://www.instagram.com">
                        <img src={imagesFooter.logoIg} alt="Logo de Instagram" />
                    </Link>
                    <Link target="_blank" to="https://www.facebook.com">
                        <img src={imagesFooter.logoFb} alt="Logo de Facebook" />
                    </Link>
                    <Link target="_blank" to="https://www.youtube.com">
                        <img src={imagesFooter.logoYoutube} alt="Logo de Youtube" />
                    </Link>
                </div>

                <div className="mediosDePago">
                    <h3>Formas de pago</h3>
                    <img id="logoVisa" src={imagesFooter.logoVisa} alt="Logo de Tarjeta Visa" />
                    <img id="logoVisaDebito" src={imagesFooter.logoVisaDebito} alt="Logo de Tarjeta Visa Débito" />
                    <img id="logoMaster" src={imagesFooter.logoMastercard} alt="Logo de Tarjeta Mastercard" />
                    <img id="logoAmex" src={imagesFooter.logoAmex} alt="Logo de Tarjeta Amex" />
                    <img id="logoMp" src={imagesFooter.logoMercadopago} alt="Logo de Mercado Pago" />
                </div>

            </div>

            <div className="footer2">
                <p>Conocé nuestra <Link>Política de Devoluciones</Link>.
                    <br />
                    2023 Huellitas - Todos los derechos reservados.
                </p>
            </div>

        </footer>

    )
}

export default Footer