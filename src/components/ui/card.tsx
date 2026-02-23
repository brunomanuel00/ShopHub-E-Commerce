// ============================================
// COMPONENTE CARD SIMPLE
// ============================================

import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode
  className?: string,
  padding?: 'none' | 'sm' | 'md' | 'lg',
  hover?: boolean,
  onClick?: () => void
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
}

export function Card({ children, className, padding = 'md', hover = false, onClick }: CardProps) {

  const baseClasses = "bg-white rounded-lg border border-gray-200 shadow-sm transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700"

  return (
    <div
      className={cn(
        baseClasses,
        paddingClasses[padding],
        hover && 'hover:shadow-md cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )

}
// ============================================
// CARD HEADER
// ============================================
interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

Card.Header = function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("border-b border-gray-200 pb-4 mb-4 dark:border-gray-700", className)}>
      {children}
    </div>
  )
}

// ============================================
// CARD BODY
// ============================================
interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

Card.Body = function CardBody({ children, className }: CardBodyProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  )
}

// ============================================
// CARD FOOTER
// ============================================
interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

Card.Footer = function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("border-t border-gray-200 pt-4 mt-4 dark:border-gray-700", className)}>
      {children}
    </div>
  )
}

// ============================================
// CARD TITLE
// ============================================
interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

Card.Title = function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("text-lg font-semibold text-gray-900 dark:text-white", className)}>
      {children}
    </h3>
  )
}

// ============================================
// CARD DESCRIPTION
// ============================================
interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

Card.Description = function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-gray-600 dark:text-gray-400", className)}>
      {children}
    </p>
  )
}







// 6. LÓGICA DE RENDERIZADO:
//    - Renderizar <div>
//    - className usando cn():
//      * baseClasses
//      * paddingClasses[padding]
//      * SI hover: 'hover:shadow-md cursor-pointer'
//      * className del usuario
//    - Contenido: {children}

// 7. EXPORTAR Card

// BONUS: Crear sub-componentes (opcional pero útil)
// - Card.Header
// - Card.Body
// - Card.Footer
// Por ahora puedes dejarlo simple, lo mejoraremos después






// 1. IMPORTAR React
//    - Importar cn desde '@/lib/cn'

// 2. CREAR interface CardProps
//    - Propiedades:
//      * children: React.ReactNode
//      * className?: string
//      * padding?: 'none' | 'sm' | 'md' | 'lg'
//      * hover?: boolean (efecto hover)

// 3. CREAR objeto con clases de padding
//    - paddingClasses:
//      * none: ''
//      * sm: 'p-4'
//      * md: 'p-6'
//      * lg: 'p-8'

// 4. CREAR componente Card
//    - Destructurar props:
//      * children
//      * className
//      * padding = 'md' (default)
//      * hover = false

// 5. CREAR clases base
//    - baseClasses:
//      * bg-white rounded-lg border border-gray-200
//      * shadow-sm
//      * transition-shadow duration-200
//      * dark:bg-gray-800 dark:border-gray-700 (para dark mode)





// import * as React from "react"

// import { cn } from "@/lib/cn"

// const Card = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-xl border bg-card text-card-foreground shadow",
//       className
//     )}
//     {...props}
//   />
// ))
// Card.displayName = "Card"

// const CardHeader = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("flex flex-col space-y-1.5 p-6", className)}
//     {...props}
//   />
// ))
// CardHeader.displayName = "CardHeader"

// const CardTitle = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("font-semibold leading-none tracking-tight", className)}
//     {...props}
//   />
// ))
// CardTitle.displayName = "CardTitle"

// const CardDescription = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// ))
// CardDescription.displayName = "CardDescription"

// const CardContent = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
// ))
// CardContent.displayName = "CardContent"

// const CardFooter = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("flex items-center p-6 pt-0", className)}
//     {...props}
//   />
// ))
// CardFooter.displayName = "CardFooter"

// export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
