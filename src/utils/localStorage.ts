// ============================================
// HELPERS PARA MANEJAR LOCALSTORAGE
// ============================================

// 1. CREAR función setItem
//    - Parámetros:
//      * key: string
//      * value: any
//    - Retorno: boolean (true si exitoso, false si hubo error)
//    - Lógica:
//      a. Usar try-catch
//      b. Dentro del try:
//         - SI value es object o array:
//           * Convertir a JSON: JSON.stringify(value)
//         - SI NO:
//           * Convertir a string: String(value)
//         - Guardar en localStorage: localStorage.setItem(key, valorConvertido)
//         - Retornar true
//      c. Dentro del catch:
//         - Console.error del error
//         - Retornar false

// 2. CREAR función getItem
//    - Parámetros:
//      * key: string
//      * defaultValue: any = null (valor por default si no existe)
//    - Retorno: any
//    - Lógica:
//      a. Usar try-catch
//      b. Dentro del try:
//         - Obtener valor: localStorage.getItem(key)
//         - SI el valor es null o undefined:
//           * Retornar defaultValue
//         - INTENTAR parsear como JSON: JSON.parse(valor)
//         - SI el parse fue exitoso:
//           * Retornar el objeto parseado
//         - SI NO (catch del parse):
//           * Retornar el valor como string
//      c. Dentro del catch principal:
//         - Console.error del error
//         - Retornar defaultValue

// 3. CREAR función removeItem
//    - Parámetros:
//      * key: string
//    - Retorno: boolean
//    - Lógica:
//      a. Usar try-catch
//      b. Dentro del try:
//         - Remover: localStorage.removeItem(key)
//         - Retornar true
//      c. Dentro del catch:
//         - Console.error del error
//         - Retornar false

// 4. CREAR función clearAll
//    - Sin parámetros
//    - Retorno: boolean
//    - Lógica:
//      a. Usar try-catch
//      b. Dentro del try:
//         - Limpiar todo: localStorage.clear()
//         - Retornar true
//      c. Dentro del catch:
//         - Console.error del error
//         - Retornar false

// 5. EXPORTAR todas las funciones