
interface ApiResponse<T> {
    success: boolean,
    message: string,
    data: T
}

interface AuthResponse {
    token: string,
    refreshToken: string,
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string

}

interface ProductsResponse {
    product: any[],
    total: number,
    skip: number,
    limit: number
}

interface ProductResponse<T> {

}

export type {
    ApiResponse,
    AuthResponse,
    ProductsResponse,
    ProductResponse
}
