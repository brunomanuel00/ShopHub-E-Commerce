

const API_URL_BASE: string = 'https://dummyjson.com' as const

const ITEMS_PER_PAGE: number = 12

const BOUNCE_DELAY: number = 300

const TOKEN_KEY: string = 'e_commerce_auth_token'

const CART_KEY: string = 'e_commerce_cart'

const BREAKPOINTS: Object = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280ppx',
    '2xl': '1536px'
}

const PRODUCT_CATEGORY: string[] = []

const TAX_RATE: number = 0.10

export const CONSTANT = {
    API_URL_BASE,
    ITEMS_PER_PAGE,
    BOUNCE_DELAY,
    TOKEN_KEY,
    CART_KEY,
    BREAKPOINTS,
    PRODUCT_CATEGORY,
    TAX_RATE
} as const;

