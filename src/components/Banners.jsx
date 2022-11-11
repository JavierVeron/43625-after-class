import React from "react";

const Banners = () => {
    return (
        <div className="container">
            <div className="row gx-5 mb-5">
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="images/AF_BANNER_WEB_modulo_horizontal_580x250px_9f7a5a7946.jpg" alt="Wakanda" className="img-fluid" /></p>
                    <h4>¡Encuentra en Cajita Feliz los 10 juguetes de Pantera Negra: Wakanda Por Siempre, de Marvel Studios!</h4>
                    <p><a href="https://www.mcdonalds.com.ar/en-familia/cajita-feliz-juguete" target="_blank" className="btn btn-warning">Ver Más</a></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="images/1026x522_Banner_WEB_Mym_Digital_1_97d71691af.jpg" alt="Pedí la App" className="img-fluid" /></p>
                    <h4>Disfrutá McDonald's a tu manera</h4>
                    <p>Adelantá tu pedido desde la app y retirá como quieras</p>
                    <p><a href="https://d2eay.app.goo.gl/?link=https://promociones.mcdonalds.com.ar/ecommerce_mop&apn=com.mcdo.mcdonalds&isi=1114009187&ibi=com.mcdo.mcdonalds&dfl=https://www.mcdonalds.com.ar/pedidos" target="_blank" className="btn btn-warning">Ver Más</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banners;