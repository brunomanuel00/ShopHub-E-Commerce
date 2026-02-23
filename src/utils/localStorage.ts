// ============================================
// HELPERS PARA MANEJAR LOCALSTORAGE
// ============================================



const setItem = (key: string, value: any): boolean => {
    try {
        let valueProps;
        if (typeof value === "object") {
            valueProps = JSON.stringify(value)
        } else {
            valueProps = String(value)
        }
        localStorage.setItem(key!, valueProps)
        return true

    } catch (error) {
        console.log("Error in setItem LocalStorage", error)
        return false
    }

}

const getItem = (key: string, defaultValue: any = null): any => {
    try {
        let item = localStorage.getItem(key)
        if (item === null || item === undefined) {
            return defaultValue
        }
        try {

            return JSON.parse(item);
        } catch {

            return item;
        }

    } catch (error) {
        console.log("Error in getItem LocalStorage", error)

        return defaultValue

    }
}

const removeItem = (key: string): boolean => {
    try {
        localStorage.removeItem(key)
        return true

    } catch (error) {
        console.log("Error in removeItem LocalStorage", error)

        return false

    }

}

const clearAll = (): boolean => {
    try {
        localStorage.clear()
        return true

    } catch (error) {
        console.log("Error in clearAll LocalStorage", error)

        return false

    }

}

export { setItem, getItem, removeItem, clearAll }

