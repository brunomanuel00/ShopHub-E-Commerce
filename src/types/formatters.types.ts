
interface FormatCurrencyProps {
    amount: number,
    currency: string
}


interface FormatDateProps {
    date: Date | string,
    locale?: string,
}

interface FormatDiscountProps {
    percentage: number
}

interface FormatRatingProps {
    rating: number,
    maxRating?: number
}


export type {
    FormatCurrencyProps,
    FormatDateProps,
    FormatDiscountProps,
    FormatRatingProps
}