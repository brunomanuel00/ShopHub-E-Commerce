// ============================================
// HOOK PARA USAR LOCALSTORAGE CON REACT STATE
// ============================================
import { useState, useCallback } from "react";

import { getItem, setItem, removeItem } from "@/utils/localStorage";

type SetValue<T> = T | ((prev: T) => T);

type UseLocalStorageReturn<T> = [
    T,
    (value: SetValue<T>) => void,
    () => void
];

export function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageReturn<T> {
    const [storedValue, setStoredValue] = useState<T>(() => {
        return getItem(key, initialValue)
    })

    const setValue = useCallback((value: SetValue<T>) => {

        try {
            setStoredValue((prevValue) => {

                const newValue: T = value instanceof Function
                    ? value(prevValue)
                    : value;


                setItem(key, newValue);

                return newValue;
            })
        } catch (error) {
            console.error("Error setting localStorage value:", error);
        }
    }, [key])

    const removeValue = useCallback(() => {
        setStoredValue(initialValue)
        removeItem(key)
    }, [key, initialValue])

    return [storedValue, setValue, removeValue]
}


///Ejemplo de uso del hook


// import { useState } from 'react'
// import './App.css'
// import MainLayout from '@/components/layout/MainLayout'
// import { useLocalStorage } from '@/hooks/useLocalStorage'

// interface User {
//   name: string,
//   age: number
// }
// function App() {
//   const [user, setUser, removeUser] = useLocalStorage<User | null>('user', null)
//   const [count, setCount] = useLocalStorage('count', 0)

//   return (
//     <div>
//       {/* ✅ Funciona: Valor directo */}
//       <button onClick={() => setUser({ name: 'Juan', age: 25 })}>
//         Set User
//       </button>

//       {/* ✅ Funciona: Función updater */}
//       <button onClick={() => setCount(prev => prev + 1)}>
//         Increment: {count}
//       </button>

//       {/* ✅ Funciona: Remover */}
//       <button onClick={removeUser}>
//         Remove User
//       </button>

//       {/* Ver estado */}
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   )
// }
// export default App
