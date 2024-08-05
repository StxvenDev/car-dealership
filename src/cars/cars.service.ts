import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interface/car.interface';
import {v4 as uuid} from 'uuid'


@Injectable()
export class CarsService {

  private cars : Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Fortuner'
    },
    {
      id: uuid(),
      brand: 'Mercedez Benz',
      model: 'Class G AMG'
    },
    {
      id: uuid(),
      brand: 'Audi',
      model: 'A8'
    },
  ]
  
  findAll() {
    return this.cars;
  }

  findOneById( id: string) {
    const car = this.cars.find(car => car.id === id);
    if(!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

}
