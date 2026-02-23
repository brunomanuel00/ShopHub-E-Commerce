// ============================================
// HOOK PARA DETECTAR MEDIA QUERIES
// ============================================

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        const media = window.matchMedia(query)

        setMatches(media.matches)

        const handlerMedia = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        }

        media.addEventListener('change', handlerMedia)

        return () => {
            media.removeEventListener('change', handlerMedia)
        }

    }, [query])

    return matches

}




// 2. CREAR hook useMediaQuery
//    - Parámetros:
//      * query: string (la media query, ej: '(min-width: 768px)')
//    - Retorno: boolean (true si hace match, false si no)

// 3. LÓGICA DEL HOOK:
//    a. CREAR estado booleano para matches
//       - Inicial: false
//    
//    b. USAR useEffect
//       - Dependencias: [query]
//       - Lógica:
//         * Crear MediaQueryList: window.matchMedia(query)
//         * Actualizar estado inicial: setMatches(media.matches)
//         
//         * Crear función handler:
//           - Parámetro: event del tipo MediaQueryListEvent
//           - Actualizar estado: setMatches(event.matches)
//         
//         * Agregar listener al media query:
//           - Usar: media.addEventListener('change', handler)
//         
//         * En la función de cleanup:
//           - Remover listener: media.removeEventListener('change', handler)
//    
//    c. RETORNAR el estado matches

// 4. EXPORTAR el hook

// Ejemplo de uso:
// const isMobile = useMediaQuery('(max-width: 768px)')
// const isDesktop = useMediaQuery('(min-width: 1024px)')


