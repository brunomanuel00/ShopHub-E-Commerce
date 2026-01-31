import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ChevronDown,
    Star,
    TrendingUp,
    Zap,
    Filter
} from 'lucide-react';

interface SidebarCategory {
    name: string;
    path: string;
    subcategories?: string[];
}

const Sidebar: React.FC = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    const categories: SidebarCategory[] = [
        {
            name: 'Electrónica',
            path: '/categoria/electronica',
            subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Audífonos']
        },
        {
            name: 'Moda',
            path: '/categoria/moda',
            subcategories: ['Ropa Hombre', 'Ropa Mujer', 'Zapatos', 'Accesorios']
        },
        {
            name: 'Hogar',
            path: '/categoria/hogar',
            subcategories: ['Muebles', 'Decoración', 'Cocina', 'Jardín']
        },
        {
            name: 'Deportes',
            path: '/categoria/deportes',
            subcategories: ['Fútbol', 'Fitness', 'Ciclismo', 'Running']
        },
        {
            name: 'Belleza',
            path: '/categoria/belleza',
            subcategories: ['Cuidado Facial', 'Maquillaje', 'Perfumes', 'Cabello']
        }
    ];

    const filters = {
        price: [
            { label: 'Menos de $20', value: '0-20' },
            { label: '$20 - $50', value: '20-50' },
            { label: '$50 - $100', value: '50-100' },
            { label: 'Más de $100', value: '100+' }
        ],
        rating: [5, 4, 3, 2, 1],
        specials: [
            { icon: <TrendingUp size={16} />, label: 'Tendencia', path: '/tendencia' },
            { icon: <Zap size={16} />, label: 'Ofertas', path: '/ofertas' },
            { icon: <Star size={16} />, label: 'Más vendidos', path: '/vendidos' }
        ]
    };

    return (
        <aside className="h-full overflow-y-auto">
            <div className="p-6 space-y-8">
                {/* Filtros */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <Filter size={20} className="text-gray-500" />
                        <h2 className="text-lg font-semibold text-gray-800">Filtros</h2>
                    </div>

                    {/* Precio */}
                    <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-3">Precio</h3>
                        <div className="space-y-2">
                            {filters.price.map((filter) => (
                                <label key={filter.value} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="price"
                                        value={filter.value}
                                        className="text-blue-600"
                                    />
                                    <span className="text-gray-600 text-sm">{filter.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Calificación */}
                    <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-3">Calificación</h3>
                        <div className="space-y-2">
                            {filters.rating.map((stars) => (
                                <label key={stars} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="text-blue-600"
                                    />
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={`${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-600 text-sm">y más</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categorías */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Categorías</h2>
                    <div className="space-y-1">
                        {categories.map((category) => (
                            <div key={category.path} className="border-b border-gray-100 last:border-0">
                                <button
                                    className="w-full flex items-center justify-between py-3 text-left hover:text-blue-600 transition-colors"
                                    onClick={() => setExpandedCategory(
                                        expandedCategory === category.name ? null : category.name
                                    )}
                                >
                                    <span className="font-medium text-gray-700">{category.name}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${expandedCategory === category.name ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                {expandedCategory === category.name && category.subcategories && (
                                    <div className="pb-3 pl-4 space-y-2">
                                        {category.subcategories.map((sub) => (
                                            <Link
                                                key={sub}
                                                to={`${category.path}/${sub.toLowerCase()}`}
                                                className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                                            >
                                                {sub}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Especiales */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Especiales</h2>
                    <div className="space-y-3">
                        {filters.specials.map((special) => (
                            <Link
                                key={special.path}
                                to={special.path}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                                <div className="text-blue-600 group-hover:scale-110 transition-transform">
                                    {special.icon}
                                </div>
                                <span className="font-medium text-gray-700 group-hover:text-blue-600">
                                    {special.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Banner promocional */}
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                    <h3 className="font-bold text-lg mb-2">¡Oferta Especial!</h3>
                    <p className="text-sm mb-4">
                        Hasta 40% de descuento en productos seleccionados
                    </p>
                    <Link
                        to="/ofertas"
                        className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Ver ofertas
                    </Link>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;