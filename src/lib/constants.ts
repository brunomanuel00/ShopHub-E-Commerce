

const API_BASE_URL: string = 'https://dummyjson.com' as const

const ITEMS_PER_PAGE: number = 12

const DEBOUNCE_DELAY: number = 300

const TOKEN_KEY: string = 'e_commerce_auth_token'

const CART_KEY: string = 'e_commerce_cart'

const BREAKPOINTS: Object = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
}

const PRODUCT_CATEGORIES: string[] = []

const TAX_RATE: number = 0.10

export {
    API_BASE_URL,
    ITEMS_PER_PAGE,
    DEBOUNCE_DELAY,
    TOKEN_KEY,
    CART_KEY,
    BREAKPOINTS,
    PRODUCT_CATEGORIES,
    TAX_RATE
};

