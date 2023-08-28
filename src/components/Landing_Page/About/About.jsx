import React from 'react'
import imgPayment from '../../../assets/paiment.png'
import imgGestion from '../../../assets/gestion.png'
import imgSegurity from '../../../assets/security.png'
import imgGlobalPayment from '../../../assets/global-payment.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init();
    return (
        <>
            <section className='d-flex align-items-center justify-content-center flex-column w-100 h-100 py-5'>
                <div className='d-flex align-items-center justify-content-center flex-column w-100'>
                    <div className='container text-center pt-5 text-light'>
                        <h1 className=''>Pagá Facil y Rapido</h1>
                    </div>
                    <span className='line text-center w-25 mb-5 mt-2'></span>
                    <article className='container text-center fs-4 px-md-5 text-light pb-5'>
                        SmartPay es una innovadora billetera digital diseñada para simplificar y mejorar la forma en que las personas gestionan sus transacciones financieras. Con un enfoque en la comodidad, la seguridad y la inteligencia, SmartPay transforma la experiencia de pago y la administración financiera en una experiencia sin esfuerzo.
                    </article>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-column w-100' style={{background:'white'}}>
                    <div className='container text-center mt-5 pt-5'>
                        <h1 className=''>Pago Inteligente y Conveniente</h1>
                    </div>
                    <span className='line text-center w-25'></span>
                    <div className='d-md-flex align-items-center justify-content-center px-5 pb-5 w-100'>
                        <div data-aos="fade-right">
                            <img src={imgPayment} className='w-100 md-w-50 ' alt="" />
                        </div>
                        <article data-aos="fade-left" className='container text-center fs-4 px-md-5'>
                            smartPay permite a los usuarios realizar pagos de manera rápida y sencilla, tanto en tiendas físicas como en línea. Mediante la integración de tecnologías de pago contactless y códigos QR, los usuarios pueden completar transacciones con un simple toque o escaneo.
                        </article>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-column w-100 '>
                    <div className='container text-center mt-5 pt-5'>
                        <h1 className='text-light'>Gestión Financiera Integral</h1>
                    </div>
                    <span className='line text-center w-25'></span>
                    <div className='d-md-flex align-items-center justify-content-center flex-row-reverse px-5 w-100'>
                        <div data-aos="fade-left">
                            <img src={imgGestion} className='w-100 md-w-50 p-5' alt="" />
                        </div>
                        <article data-aos="fade-right" className='container text-center fs-4 px-lg-5 text-light'>
                            Además de los pagos, smartPay ofrece herramientas avanzadas de gestión financiera. Los usuarios pueden rastrear sus gastos, establecer presupuestos personalizados y recibir análisis detallados de sus hábitos de gasto.
                        </article>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-column w-100' style={{background:'white'}}>
                    <div className='container text-center mt-5 pt-5'>
                        <h1 className=''>Seguridad de Vanguardia</h1>
                    </div>
                    <span className='line text-center w-25'></span>
                    <div className='d-md-flex align-items-center justify-content-center px-5 pb-5 w-100'>
                        <div data-aos="fade-right">
                            <img src={imgSegurity} className='w-100 md-w-50 p-5' alt="" />
                        </div>
                        <article data-aos="fade-left" className='container text-center fs-4 px-md-5'>
                            La seguridad es primordial en smartPay. La billetera utiliza tecnologías de cifrado de última generación y autenticación biométrica para garantizar la protección de los datos y las transacciones de los usuarios.
                        </article>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center flex-column w-100 '>
                    <div className='container text-center mt-5 pt-5'>
                        <h1 className='text-light'>Transacciones Globales</h1>
                    </div>
                    <span className='line text-center w-25'></span>
                    <div className='d-md-flex align-items-center justify-content-center flex-row-reverse px-5 w-100'>
                        <div data-aos="fade-left">
                            <img src={imgGlobalPayment} className='w-100 md-w-50 p-5' alt="" />
                        </div>
                        <article data-aos="fade-right" className='container text-center fs-4 px-lg-5 text-light'>
                            smartPay no conoce fronteras. Los usuarios pueden realizar pagos y transferencias de dinero de manera instantánea y segura en todo el mundo, eliminando las barreras tradicionales de las transacciones internacionales.
                        </article>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About