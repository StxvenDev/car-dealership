import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interface/car.interface';
import { UpdateCarDto } from './dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(
    private readonly carsService : CarsService
  ){}

  @Get()
  getAllCars(){
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string){
    console.log({id});
    return {
      car : this.carsService.findOneById(id)
    };
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto){
    const car: Car = this.carsService.create(createCarDto);
    return car;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto){
    return this.carsService.update( id, updateCarDto );
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string){
    this.carsService.delete(id);
    return {
      ok: true,
      method: 'Delete'
    };
  }
}
