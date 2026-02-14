// ============================================
// FUNCIONES PARA FORMATEAR DATOS
// ============================================

import { FormatCurrencyProps, FormatDateProps, FormatDiscountProps, FormatRatingProps } from "@/types/index"


const formatCurrency = ({ amount, currency = 'USD' }: FormatCurrencyProps): string => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    })

    const formattedAmount = formatter.format(amount)

    return formattedAmount

}

const formatDate = ({ date, locale }: FormatDateProps): string => {
    let dateToFormat: Date;
    if (typeof date === 'string') {
        dateToFormat = new Date(date)
    } else {

        dateToFormat = date;
    }

    const formatter = new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: 'short',
        day: 'numeric'
    })

    const formatterDate = formatter.format(dateToFormat)

    return formatterDate

}

const formatDiscount = ({ percentage }: FormatDiscountProps): string => {

    if (typeof percentage !== 'number' || isNaN(percentage)) {
        return '-0%';
    }

    const perc = Math.round(percentage)
    return `-${perc}%`
}


const formatRating = ({ rating, maxRating = 5 }: FormatRatingProps): string => {

    try {

        if (typeof rating !== 'number' || isNaN(rating)) {
            console.warn('Rating inválido, usando 0');
            return `0.0 / ${maxRating}`;

        }
        // Validate mr be positive
        const validPosRating = maxRating > 0 ? maxRating : 5;

        const validMaxRating = validPosRating <= 5 ? validPosRating : 5;


        const validRating = Math.min(Math.max(rating, 0), validMaxRating);


        const roundedRating = validRating.toFixed(1)

        return `${roundedRating} / ${validMaxRating}`;

    } catch (error) {
        console.error('Error formatting rating:', error);
        return `0.0 / ${maxRating}`;

    }
}

const formatStock = (stock: number): string => {


    if (stock == 0) {
        return "Out of stock"
    }
    else if (stock < 10) {
        return `Only ${stock} left`
    }

    return 'In stock'

}

export {
    formatCurrency,
    formatDate,
    formatDiscount,
    formatRating,
    formatStock
}

