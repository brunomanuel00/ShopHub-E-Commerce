import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    padding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    size = 'lg',
    padding = true
}) => {
    const sizeClasses = {
        sm: 'max-w-3xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full'
    };

    const paddingClass = padding ? 'px-4 sm:px-6 lg:px-8' : '';

    return (
        <div className={`${sizeClasses[size]} mx-auto ${paddingClass} ${className}`}>
            {children}
        </div>
    );
};

export default Container;