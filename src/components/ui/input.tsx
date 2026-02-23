// ============================================
// COMPONENTE INPUT REUTILIZABLE
// ============================================

import React, { forwardRef, InputHTMLAttributes, useId } from "react"
import { cn } from "@/lib/cn"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  error?: string,
  helperText?: string,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  wrapperClassName?: string

}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  wrapperClassName = '',
  className = '',
  id,
  disabled = false,
  ...rest
}, ref) => {

  const generatedId = useId()
  const inputId = id || generatedId

  const baseInputClasses = "w-full rounded-lg border px-3 py-2 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400"

  const stateClasses = error
    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"

  const paddingClasses = cn(
    leftIcon && "pl-10",
    rightIcon && "pr-10"
  )

  const finalInputClasses = cn(
    baseInputClasses,
    stateClasses,
    paddingClasses,
    className
  )

  return (
    <div className={wrapperClassName}>
      {label &&
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      }
      {leftIcon && (
        <div className="absolute left-0 inset-y-0 flex items-center justify-center pl-3 pointer-events-none">
          {leftIcon}
        </div>
      )}

      <input
        ref={ref}
        id={inputId}
        className={finalInputClasses}
        disabled={disabled}
        {...rest}
      />

      {rightIcon && (
        <div className="absolute right-0 inset-y-0 flex items-center justify-center pr-3 pointer-events-none">
          {rightIcon}
        </div>
      )}

      {error && (
        <p
          className="text-sm text-red-600 mt-1"
        >
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="text-sm text-gray-500 mt-1">{helperText}</p>
      )}

    </div>
  )


})

Input.displayName = 'Input'

export default Input



// 2. CREAR interface InputProps
//    - Extender: InputHTMLAttributes<HTMLInputElement>
//    - Props adicionales:
//      * label?: string
//      * error?: string
//      * helperText?: string
//      * leftIcon?: React.ReactNode
//      * rightIcon?: React.ReactNode
//      * wrapperClassName?: string

// 3. CREAR componente Input usando forwardRef
//    - Destructurar props:
//      * label
//      * error
//      * helperText
//      * leftIcon
//      * rightIcon
//      * wrapperClassName
//      * className
//      * id
//      * disabled
//      * ...rest

// 4. GENERAR ID único si no se proporciona
//    - Usar: React.useId() o simplemente usar el prop id
//    - Guardar en variable: inputId = id || useId()


// 5. CREAR clases base para el input
//    - baseInputClasses:
//      * w-full rounded-lg border
//      * px-3 py-2 text-sm
//      * transition-colors duration-200
//      * focus:outline-none focus:ring-2
//      * disabled:opacity-50 disabled:cursor-not-allowed
//      * placeholder:text-gray-400

// 6. CREAR clases según estado
//    - SI error existe:
//      * border-red-500 focus:ring-red-500 focus:border-red-500
//    - SI NO:
//      * border-gray-300 focus:ring-blue-500 focus:border-blue-500

// 7. AJUSTAR padding si hay iconos
//    - SI leftIcon: agregar 'pl-10' (padding-left extra)
//    - SI rightIcon: agregar 'pr-10' (padding-right extra)

// 8. LÓGICA DE RENDERIZADO:
//    - Renderizar div wrapper (con wrapperClassName)
//    - Contenido:
//      a. SI label existe:
//         - Renderizar <label>
//         - htmlFor={inputId}
//         - className con estilos (block text-sm font-medium text-gray-700 mb-1)
//         - Contenido: {label}
//      
//      b. Renderizar div contenedor del input (relative)
//         - SI leftIcon:
//           * Renderizar div absolute (left-0, inset-y-0)
//           * Centrar icono (flex items-center justify-center)
//           * Padding left
//           * Renderizar leftIcon
//         
//         - Renderizar <input>
//           * ref={ref}
//           * id={inputId}
//           * className={combinar todas las clases con cn()}
//           * disabled={disabled}
//           * {...rest}
//         
//         - SI rightIcon:
//           * Renderizar div absolute (right-0, inset-y-0)
//           * Centrar icono
//           * Renderizar rightIcon
//      
//      c. SI error existe:
//         - Renderizar <p>
//         - className: text-sm text-red-600 mt-1
//         - Contenido: {error}


// 9. AGREGAR displayName
//    - Input.displayName = 'Input'

// 10. EXPORTAR Input

















// import * as React from "react"

// import { cn } from "@/lib/cn"

// const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Input.displayName = "Input"

// export { Input }
