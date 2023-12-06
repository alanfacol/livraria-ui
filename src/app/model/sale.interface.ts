export interface Sale {
    addressId: number,
    booksCode: Pack[]
}

interface Pack {
    book: string,
    amount: number
}