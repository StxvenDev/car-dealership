import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-cart.dto';

@Controller('cars')
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
    return createCarDto;
  }

  @Patch(':id')
  updateCar(@Param('id') id: string, @Body() payload: any){
    return payload;
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string){
    return {
      ok: true,
      method: 'Delete'
    };
  }
}
