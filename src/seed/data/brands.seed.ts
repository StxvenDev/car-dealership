import {v4 as uuid} from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED : Brand[]= [
    {
        id: uuid(),
        name:   'Toyota',
        createdAt:  new Date().getDate(),
    },
    {
        id: uuid(),
        name:   'Ferrari',
        createdAt:  new Date().getDate(),
    },
    {
        id: uuid(),
        name:   'Mazda',
        createdAt:  new Date().getDate(),
    },
]