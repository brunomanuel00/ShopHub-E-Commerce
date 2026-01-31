// ============================================
// CONFIGURACIÓN DE AXIOS PARA API CALLS
// ============================================

// 1. IMPORTAR axios desde 'axios'

import { Axios } from 'axios'


// 2. IMPORTAR API_BASE_URL y TOKEN_KEY desde './constants'

// 3. CREAR instancia de axios
//    - Nombre de la variable: api
//    - Usar: axios.create()
//    - Configuración del objeto:
//      * baseURL: API_BASE_URL
//      * timeout: 10000 (10 segundos)
//      * headers:
//        - 'Content-Type': 'application/json'

// 4. AGREGAR REQUEST INTERCEPTOR
//    - Usar: api.interceptors.request.use()
//    - Función de éxito (recibe config):
//      a. Obtener token del localStorage usando TOKEN_KEY
//      b. SI el token existe:
//         - Agregar header Authorization
//         - Formato: `Bearer ${token}`
//         - Modificar: config.headers.Authorization
//      c. Retornar config (modificado o no)
//    - Función de error:
//      * Retornar Promise.reject(error)

// 5. AGREGAR RESPONSE INTERCEPTOR
//    - Usar: api.interceptors.response.use()
//    - Función de éxito (recibe response):
//      * Simplemente retornar response.data
//      * Esto hace que no tengamos que hacer .data en cada llamada
//    - Función de error (recibe error):
//      a. SI error.response existe:
//         - SI status es 401 (no autorizado):
//           * Remover token del localStorage (usar TOKEN_KEY)
//           * Redirigir a la página home: window.location.href = '/'
//      b. Retornar Promise.reject(error)

// 6. EXPORTAR la instancia 'api' como export nombrado