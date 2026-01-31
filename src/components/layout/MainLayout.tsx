import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Container from './Container';

interface MainLayoutProps {
    children: ReactNode;
    showSidebar?: boolean;
    containerClassName?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    showSidebar = false,
    containerClassName = ''
}) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <Header />


            {/* Contenido Principal */}
            <div className="flex flex-1">
                {/* Sidebar (condicional) */}
                {showSidebar && (
                    <div className="hidden lg:block w-64 border-r border-gray-200 bg-gray-50">
                        <Sidebar />
                    </div>
                )}

                {/* Contenido Dinámico */}
                <main className="flex-1">
                    <Container size="full" className={containerClassName}>
                        {children}
                    </Container>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;