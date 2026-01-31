import React from 'react';
import { Link } from 'react-router-dom';
import {
    CreditCard,
    Shield,
    Truck,
    MessageCircle,
    Facebook,
    Instagram,
    Twitter,
    Youtube
} from 'lucide-react';
import Container from './Container';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white">
            {/* Sección de características */}
            <div className="border-b border-gray-700">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <Truck size={24} />
                            </div>
                            <h3 className="font-semibold text-lg">Envío Gratis</h3>
                            <p className="text-gray-300 text-sm">
                                En compras superiores a $50
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                <Shield size={24} />
                            </div>
                            <h3 className="font-semibold text-lg">Compra Segura</h3>
                            <p className="text-gray-300 text-sm">
                                Protegemos tus datos y pagos
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                <CreditCard size={24} />
                            </div>
                            <h3 className="font-semibold text-lg">Pago Flexible</h3>
                            <p className="text-gray-300 text-sm">
                                Tarjetas, PayPal y más
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                                <MessageCircle size={24} />
                            </div>
                            <h3 className="font-semibold text-lg">Soporte 24/7</h3>
                            <p className="text-gray-300 text-sm">
                                Atención al cliente siempre
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Contenido principal del footer */}
            <Container>
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Logo y descripción */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">S</span>
                                </div>
                                <span className="text-2xl font-bold">
                                    Shop<span className="text-blue-400">Hub</span>
                                </span>
                            </Link>
                            <p className="text-gray-300 mb-6 max-w-md">
                                Tu destino para compras en línea con los mejores productos,
                                precios competitivos y servicio excepcional.
                            </p>
                            {/* Redes sociales */}
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Enlaces rápidos */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Tienda</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/productos" className="text-gray-300 hover:text-white transition-colors">
                                        Productos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/categorias" className="text-gray-300 hover:text-white transition-colors">
                                        Categorías
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/ofertas" className="text-gray-300 hover:text-white transition-colors">
                                        Ofertas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/nuevo" className="text-gray-300 hover:text-white transition-colors">
                                        Nuevo
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Soporte */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Soporte</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/ayuda" className="text-gray-300 hover:text-white transition-colors">
                                        Centro de ayuda
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">
                                        Contacto
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/envios" className="text-gray-300 hover:text-white transition-colors">
                                        Envíos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/devoluciones" className="text-gray-300 hover:text-white transition-colors">
                                        Devoluciones
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/privacidad" className="text-gray-300 hover:text-white transition-colors">
                                        Privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terminos" className="text-gray-300 hover:text-white transition-colors">
                                        Términos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                                        Cookies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/seguridad" className="text-gray-300 hover:text-white transition-colors">
                                        Seguridad
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Footer inferior */}
            <div className="border-t border-gray-700 py-6">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} ShopHub. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <img src="/visa.svg" alt="Visa" className="h-8" />
                            <img src="/mastercard.svg" alt="MasterCard" className="h-8" />
                            <img src="/paypal.svg" alt="PayPal" className="h-8" />
                            <img src="/amex.svg" alt="American Express" className="h-8" />
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;