import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Search,
    ShoppingCart,
    User,
    Menu,
    X,
    ChevronDown
} from 'lucide-react';
import Container from './Container';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const navigate = useNavigate();

    // Categorías del e-commerce
    const categories = [
        { name: 'Electrónica', path: '/categoria/electronica' },
        { name: 'Moda', path: '/categoria/moda' },
        { name: 'Hogar', path: '/categoria/hogar' },
        { name: 'Deportes', path: '/categoria/deportes' },
        { name: 'Belleza', path: '/categoria/belleza' },
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de búsqueda
        setIsSearchOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            {/* Barra superior */}
            <div className="bg-gray-800 text-white py-2 text-sm">
                <Container className="flex justify-between items-center">
                    <p className="hidden md:block">
                        🚚 Envío gratis en compras superiores a $50
                    </p>
                    <div className="flex items-center space-x-4">
                        <Link to="/ayuda" className="hover:text-blue-300 transition-colors">
                            Ayuda
                        </Link>
                        <Link to="/soporte" className="hover:text-blue-300 transition-colors">
                            Soporte 24/7
                        </Link>
                    </div>
                </Container>
            </div>

            {/* Header principal */}
            <Container>
                <div className="flex items-center justify-between h-16">
                    {/* Logo y menú móvil */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="lg:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-xl font-bold text-gray-800 hidden sm:block">
                                Shop<span className="text-blue-600">Hub</span>
                            </span>
                        </Link>
                    </div>

                    {/* Barra de búsqueda (desktop) */}
                    <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1.5 bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                                >
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Iconos de usuario/carrito */}
                    <div className="flex items-center space-x-4">
                        {/* Buscador móvil */}
                        <button
                            className="lg:hidden"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search size={22} className="text-gray-600" />
                        </button>

                        {/* Cuenta */}
                        <div className="relative group">
                            <button className="flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                <User size={22} className="text-gray-600" />
                                <span className="hidden md:block text-sm font-medium">Mi cuenta</span>
                                <ChevronDown size={16} className="text-gray-400 hidden md:block" />
                            </button>

                            {/* Dropdown de cuenta */}
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2">
                                    <Link
                                        to="/cuenta/perfil"
                                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                                    >
                                        Mi perfil
                                    </Link>
                                    <Link
                                        to="/cuenta/pedidos"
                                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                                    >
                                        Mis pedidos
                                    </Link>
                                    <Link
                                        to="/cuenta/favoritos"
                                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                                    >
                                        Favoritos
                                    </Link>
                                    <hr className="my-1" />
                                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors">
                                        Cerrar sesión
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Carrito */}
                        <Link
                            to="/carrito"
                            className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <ShoppingCart size={22} className="text-gray-600" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </Link>
                    </div>
                </div>
            </Container>

            {/* Barra de categorías (desktop) */}
            <div className="hidden lg:block border-t border-gray-100">
                <Container>
                    <nav className="flex items-center space-x-6 py-3">
                        {categories.map((category) => (
                            <Link
                                key={category.path}
                                to={category.path}
                                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </nav>
                </Container>
            </div>

            {/* Barra de búsqueda móvil */}
            {isSearchOpen && (
                <div className="lg:hidden border-t border-gray-100 py-4">
                    <Container>
                        <form onSubmit={handleSearch} className="w-full">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                                />
                                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                            </div>
                        </form>
                    </Container>
                </div>
            )}

            {/* Menú móvil */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white absolute top-full left-0 right-0 shadow-lg">
                    <Container>
                        <div className="py-4">
                            <nav className="flex flex-col space-y-3">
                                {categories.map((category) => (
                                    <Link
                                        key={category.path}
                                        to={category.path}
                                        className="py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                                <hr className="my-2" />
                                <Link
                                    to="/ofertas"
                                    className="py-2 text-red-600 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    🔥 Ofertas especiales
                                </Link>
                            </nav>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
};

export default Header;