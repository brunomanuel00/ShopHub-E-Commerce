// ============================================
// COMPONENTE BADGE
// ============================================

import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode,
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info',
  size?: 'sm' | 'md',
  className?: string
}



// 3. CREAR clases base
//    - baseClasses:
//      * inline-flex items-center justify-center
//      * rounded-full font-medium
//      * transition-colors duration-200

// 4. CREAR objeto de variantes
//    - variantClasses:
//      * default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
//      * success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
//      * warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
//      * error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
//      * info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'

// 5. CREAR objeto de tamaños
//    - sizeClasses:
//      * sm: 'px-2 py-0.5 text-xs'
//      * md: 'px-2.5 py-1 text-sm'

// 6. CREAR componente Badge
//    - Destructurar props:
//      * children
//      * variant = 'default'
//      * size = 'md'
//      * className

// 7. RENDERIZAR <span>
//    - className con cn():
//      * baseClasses
//      * variantClasses[variant]
//      * sizeClasses[size]
//      * className del usuario
//    - Contenido: {children}

// 8. EXPORTAR Badge



// 1. IMPORTAR React
//    - cn desde '@/lib/cn'

// 2. CREAR interface BadgeProps
//    - Propiedades:
//      * children: React.ReactNode
//      * variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
//      * size?: 'sm' | 'md'
//      * className?: string







// import * as React from "react"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/cn"

// const badgeVariants = cva(
//   "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
//   {
//     variants: {
//       variant: {
//         default:
//           "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
//         secondary:
//           "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         destructive:
//           "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
//         outline: "text-foreground",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   }
// )

// export interface BadgeProps
//   extends React.HTMLAttributes<HTMLDivElement>,
//   VariantProps<typeof badgeVariants> { }

// function Badge({ className, variant, ...props }: BadgeProps) {
//   return (
//     <div className={cn(badgeVariants({ variant }), className)} {...props} />
//   )
// }

// export { Badge, badgeVariants }
