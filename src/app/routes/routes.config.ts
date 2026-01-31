export const ROUTES = {
    HOME: "/",
    PRODUCTS: "/products",
    PRODUCT_DETAIL: "/products/:id",
    CART: "/cart",
    CHECKOUT: "/checkout",
    ORDER_CONFIRMATION: "/order/:orderId",
    PROFILE: "/profile",
    FAVORITES: "/favorites",
    ORDERS: "/orders",
    LOGIN: "/login",
    NOT_FOUND: "*",
} as const;

export const generatePath = {
    productDetail: (id: string | number) => `/products/${id}`,
    orderConfirmation: (orderId: string) => `/order/${orderId}`,
} 