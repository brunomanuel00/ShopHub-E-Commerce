
interface PaginatedResponse<T> {
    data: T[],
    total: number,
    skip: number,
    limit: number
}
type loading = 'idle' | 'loading' | 'success' | 'error';

interface PaginateError {
    message: string,
    status: number,
    code: string
}

type SortDirection = 'asc' | 'desc';


export type {
    PaginatedResponse,
    loading,
    PaginateError,
    SortDirection
}