export interface Sale {
    addressId: number,
    booksCode: Pack[]
}

export interface Pack {
    book: string,
    amount: number
}