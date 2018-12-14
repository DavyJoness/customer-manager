export interface Customer
{
    id?: number
    name: string
    photoUrl: string
    description: string
    age: string
    address: Address
    type: CustomerType
    categories: string[]
}

export interface Address
{
    street: string
    houseNumber: string
    city: string
}

export enum CustomerType
{
    Standard,
    Premium,
    VIP
}