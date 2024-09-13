import z from 'zod'
// foi dado um nome qlq para a parte importado de zod.

export interface CreateProductInputDTO {
    id: string,
    name: string,
    price: number
}

export interface CreateProductOutputDTO {
    message: string,
    product: {
        id: string,
        name: string,
        price: number,
        createdAt: string
    }
}

export interface EditProductInputDTO {
    idToEdit: string,
    id: string,
    name: string,
    price: number
}

export interface EditProductOutputDTO {
    idToEdit: string,
    id: string,
    name: string,
    price: number
}

// Zod é uma forma de validação de dados, substituiria os IFs.
export const CreateProductSchema = z.object({
    id: z.string().min(2).optional(),
    name: z.string().min(2).optional(),
    price: z.number().positive().gte(1).optional()
}).transform(data => data as CreateProductInputDTO)

export const EditProductSchema = z.object({
    idToEdit: z.string(),
    id: z.string().min(2).optional(),
    name: z.string({
        invalid_type_error: "'Name' deve ser do tipo string"
    }).min(2).optional(),
    price: z.number().positive().gte(0).optional()
}).transform(data => data as EditProductInputDTO)