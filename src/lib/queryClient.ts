// src/lib/queryClient.ts
import { QueryClient, DefaultOptions } from "@tanstack/react-query";

/**
 * Configuración global de React Query
 * 
 * - staleTime: Tiempo que los datos se consideran "frescos"
 * - cacheTime: Tiempo que los datos permanecen en cache
 * - refetchOnWindowFocus: Re-fetch al volver a la ventana
 * - retry: Reintentos en caso de error
 */
const queryConfig: DefaultOptions = {
    queries: {
        staleTime: 1000 * 60 * 5, // 5 minutos
        gcTime: 1000 * 60 * 10, // 10 minutos (antes era cacheTime)
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        retry: 1,
    },
    mutations: {
        retry: 0,
    },
};

export const queryClient = new QueryClient({
    defaultOptions: queryConfig,
});