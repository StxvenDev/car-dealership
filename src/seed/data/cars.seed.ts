import {v4 as uuid} from 'uuid';
import { Car } from 'src/cars/interface/car.interface'

export const CARS_SEED : Car[]= [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Fortuner'
    },
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Fortuner'
    },
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Fortuner'
    },
]