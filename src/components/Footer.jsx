import React from "react";

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="/" rel="noreferrer" className="mx-1"><img src={"/images/facebook.svg"} alt={"Facebook"} width={24} /></a>
                    <a href="/" rel="noreferrer" className="mx-1"><img src={"/images/twitter.svg"} alt={"Twitter"} width={24} /></a>
                    <a href="/" rel="noreferrer" className="mx-1"><img src={"/images/instagram.svg"} alt={"Instagram"} width={24} /></a>
                    <a href="/" rel="noreferrer" className="mx-1"><img src={"/images/youtube.svg"} alt={"YouTube"} width={24} /></a>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <a href="https://apps.apple.com/ar/app/mcdonalds-app/id1114009187" target="_blank" rel="noreferrer" className="mx-1"><img src="/images/app_store_3x_d293084ca1.png" alt="App Store" width="115" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=es_AR" target="_blank" rel="noreferrer" className="mx-1"><img src="/images/disponible_google_play_3x_c977cae3bc.png" alt="Play Store" width="129" /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.mcdonalds.com.ar/politica-de-privacidad" target="_blank" rel="noreferrer">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.buenosaires.gob.ar/defensaconsumidor" target="_blank" rel="noreferrer">Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.mcdonalds.com.ar/proteccion-datos-personales" target="_blank" rel="noreferrer">Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="https://www.mcdonalds.com.ar/nosotros/contacto" target="_blank" rel="noreferrer">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="/images/mcdonalds-logo-footer-bg-white.png" alt="McDonalds" width="40" /> © McDonald's 2022</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;