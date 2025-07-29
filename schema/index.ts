import { z } from 'zod';

export const orderSchema = z.object({
  name: z.string().min(1, 'Tu nombre es obligatorio'),
  total: z.number().gte(1, 'El total debe ser mayor a 0'),
  products: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
      })
  )
});

export const SearchSquema = z.object({
  search: z.string().trim().min(1, {message: 'La busqueda no puede ir vacia'})
})

export const ProductSchema = z.object({
  name: z.string()
      .trim()
      .min(1, { message: 'El nombre del producto no puede ir vacio'}),
  price: z.string()
      .trim()
      .transform((value) => parseFloat(value)) 
      .refine((value) => value > 0, { message: 'Precio no válido' })
      .or(z.number().min(1, {message: 'La categoría es Obligatoria' })),
  categoryId: z.string()
      .trim()
      .transform((value) => parseInt(value)) 
      .refine((value) => value > 0, { message: 'La categoría es obligatoria' })
      .or(z.number().min(1, {message: 'La categoría es obligatoria' })),
  image: z.string().trim().min(1, {message: 'La imagen es obligatoria'})
})