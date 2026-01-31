import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full text-center space-y-8">

                {/* Número 404 minimalista */}
                <div className="space-y-2">
                    <div className="text-7xl md:text-8xl font-bold text-gray-900">
                        <span className="text-blue-600">404</span>
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                {/* Mensaje */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Página no encontrada
                    </h1>
                    <p className="text-gray-600">
                        La página que buscas no existe o ha sido movida.
                    </p>
                </div>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Ir al inicio
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver atrás
                    </button>
                </div>

                {/* Enlace de ayuda minimalista */}
                <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                        ¿Necesitas ayuda?{' '}
                        <Link
                            to="/contact"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Contáctanos
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;